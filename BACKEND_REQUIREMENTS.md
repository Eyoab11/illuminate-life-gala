# Backend Requirements - Illuminate Life Event

## Overview
Backend system for handling ticket bookings, sponsor inquiries, and branding requests with email notifications and admin dashboard for manual follow-up.

---

## 1. Database Schema

### Bookings Table
```typescript
{
  id: string (UUID);
  type: 'ticket' | 'sponsor' | 'branding';
  status: 'pending' | 'contacted' | 'confirmed' | 'cancelled';
  createdAt: timestamp;
  updatedAt: timestamp;
  
  // Customer Information
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  companyName?: string; // Required for sponsors/branding
  
  // Booking Details
  ticketTier?: string; // 'Individual', 'Table of 10', 'VIP Individual'
  ticketName?: string; // Full display name
  sponsorTier?: string; // 'Luminary Presenting', 'Beacon Gold', etc.
  brandingType?: string; // Type of branding opportunity
  quantity: number;
  pricePerUnit: number;
  totalAmount: number;
  
  // Seat Assignment
  seatNumbers?: string[]; // Array of assigned seat numbers ['A1', 'A2', 'A3']
  tableNumber?: string; // For table bookings (e.g., 'T1', 'T2')
  sectionName?: string; // 'VIP Section', 'Front Section', 'General'
  
  // Additional Information
  specialRequests?: string;
  dietaryRestrictions?: string; // For tickets
  tablePreferences?: string; // For table bookings
  message?: string; // For sponsor/branding inquiries
  
  // Admin Notes
  adminNotes?: string;
  followUpDate?: timestamp;
  assignedTo?: string; // Admin user ID
}
```

### Sponsors Table
```typescript
{
  id: string (UUID);
  bookingId: string; // Reference to booking
  tier: string;
  companyName: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  logoUrl?: string;
  websiteUrl?: string;
  description?: string;
  status: 'inquiry' | 'negotiating' | 'confirmed' | 'active' | 'inactive';
  displayOrder: number;
  createdAt: timestamp;
  updatedAt: timestamp;
}
```

### Branding Opportunities Table
```typescript
{
  id: string (UUID);
  bookingId: string;
  type: string; // 'banner', 'program-ad', 'table-card', 'digital-display', etc.
  companyName: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  specifications?: object; // Size, placement preferences, etc.
  artworkUrl?: string;
  status: 'inquiry' | 'pending-approval' | 'approved' | 'active';
  createdAt: timestamp;
  updatedAt: timestamp;
}
```

### Admin Users Table
```typescript
{
  id: string (UUID);
  email: string (unique);
  passwordHash: string;
  role: 'admin' | 'super_admin';
  name: string;
  isActive: boolean;
  lastLogin?: timestamp;
  createdAt: timestamp;
  updatedAt: timestamp;
}
```

### Seat Inventory Table
```typescript
{
  id: string (UUID);
  seatNumber: string; // 'A1', 'A2', 'B1', etc.
  tableNumber?: string; // For table seating
  sectionName: string; // 'VIP Section', 'Front Section', 'General'
  seatType: 'individual' | 'table' | 'vip';
  isAvailable: boolean;
  bookingId?: string; // Reference to booking if reserved
  reservedAt?: timestamp;
  createdAt: timestamp;
  updatedAt: timestamp;
}
```

### Activity Log Table
```typescript
{
  id: string (UUID);
  timestamp: timestamp;
  action: string; // 'booking_created', 'status_updated', 'email_sent', 'seats_assigned', etc.
  entityType: 'booking' | 'sponsor' | 'branding' | 'admin' | 'seat';
  entityId: string;
  userId?: string; // Admin who performed action
  details: object; // JSON with action details
  ipAddress?: string;
}
```

---

## 2. API Endpoints

### Public Endpoints (No Authentication)

#### POST `/api/bookings/ticket`
Create a new ticket booking
```typescript
Request Body:
{
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  ticketTier: string;
  ticketName: string;
  quantity: number;
  pricePerUnit: number;
  totalAmount: number;
  specialRequests?: string;
  dietaryRestrictions?: string;
  tablePreferences?: string;
}

Response:
{
  success: boolean;
  bookingId: string;
  message: string;
}
```

#### POST `/api/bookings/sponsor`
Submit sponsor inquiry
```typescript
Request Body:
{
  companyName: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  sponsorTier: string;
  message?: string;
}

Response:
{
  success: boolean;
  inquiryId: string;
  message: string;
}
```

#### POST `/api/bookings/branding`
Submit branding opportunity inquiry
```typescript
Request Body:
{
  companyName: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  brandingType: string;
  specifications?: object;
  message?: string;
}

Response:
{
  success: boolean;
  inquiryId: string;
  message: string;
}
```

#### GET `/api/bookings/:id/verify`
Verify booking exists (for customer confirmation page)
```typescript
Response:
{
  exists: boolean;
  type: string;
  status: string;
  createdAt: timestamp;
}
```

#### GET `/api/sponsors/active`
Get list of active sponsors for public display
```typescript
Response:
{
  sponsors: Array<{
    tier: string;
    companyName: string;
    logoUrl?: string;
    websiteUrl?: string;
  }>;
}
```

---

### Admin Endpoints (Authentication Required)

#### POST `/api/admin/auth/login`
Admin login
```typescript
Request Body:
{
  email: string;
  password: string;
}

Response:
{
  success: boolean;
  token: string; // JWT
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
  };
}
```

#### POST `/api/admin/auth/logout`
Admin logout
```typescript
Response:
{
  success: boolean;
}
```

#### GET `/api/admin/dashboard/stats`
Get dashboard statistics
```typescript
Response:
{
  totalBookings: number;
  pendingBookings: number;
  confirmedBookings: number;
  totalRevenue: number;
  ticketsSold: {
    individual: number;
    table: number;
    vip: number;
  };
  sponsorInquiries: number;
  brandingInquiries: number;
  recentActivity: Array<ActivityLog>;
}
```

#### GET `/api/admin/bookings`
List all bookings with filters
```typescript
Query Parameters:
- type?: 'ticket' | 'sponsor' | 'branding'
- status?: string
- search?: string (search by name, email, company)
- page?: number
- limit?: number
- sortBy?: string
- sortOrder?: 'asc' | 'desc'

Response:
{
  bookings: Array<Booking>;
  total: number;
  page: number;
  totalPages: number;
}
```

#### GET `/api/admin/bookings/:id`
Get single booking details
```typescript
Response:
{
  booking: Booking;
  activityLog: Array<ActivityLog>;
}
```

#### PATCH `/api/admin/bookings/:id`
Update booking
```typescript
Request Body:
{
  status?: string;
  adminNotes?: string;
  followUpDate?: timestamp;
  assignedTo?: string;
  seatNumbers?: string[];
  tableNumber?: string;
  sectionName?: string;
}

Response:
{
  success: boolean;
  booking: Booking;
}
```

#### POST `/api/admin/bookings/:id/assign-seats`
Assign seats to booking
```typescript
Request Body:
{
  seatNumbers: string[]; // ['A1', 'A2', 'A3']
  tableNumber?: string;
  sectionName: string;
  sendEmail?: boolean; // Send confirmation email with seat info
}

Response:
{
  success: boolean;
  booking: Booking;
  message: string;
}
```

#### GET `/api/admin/seats`
Get seat inventory and availability
```typescript
Query Parameters:
- sectionName?: string
- seatType?: string
- isAvailable?: boolean
- search?: string

Response:
{
  seats: Array<Seat>;
  total: number;
  available: number;
  reserved: number;
}
```

#### POST `/api/admin/seats/bulk-create`
Create multiple seats (initial setup)
```typescript
Request Body:
{
  seats: Array<{
    seatNumber: string;
    tableNumber?: string;
    sectionName: string;
    seatType: string;
  }>;
}

Response:
{
  success: boolean;
  created: number;
  message: string;
}
```

#### PATCH `/api/admin/seats/:id/release`
Release seat from booking (make available again)
```typescript
Response:
{
  success: boolean;
  seat: Seat;
}
```

#### DELETE `/api/admin/bookings/:id`
Cancel/delete booking
```typescript
Response:
{
  success: boolean;
  message: string;
}
```

#### GET `/api/admin/sponsors`
List all sponsor inquiries
```typescript
Query Parameters:
- status?: string
- search?: string
- page?: number
- limit?: number

Response:
{
  sponsors: Array<Sponsor>;
  total: number;
  page: number;
  totalPages: number;
}
```

#### PATCH `/api/admin/sponsors/:id`
Update sponsor details
```typescript
Request Body:
{
  status?: string;
  logoUrl?: string;
  websiteUrl?: string;
  description?: string;
  displayOrder?: number;
}

Response:
{
  success: boolean;
  sponsor: Sponsor;
}
```

#### POST `/api/admin/sponsors/:id/logo`
Upload sponsor logo
```typescript
Request: multipart/form-data with file

Response:
{
  success: boolean;
  logoUrl: string;
}
```

#### GET `/api/admin/branding`
List all branding inquiries
```typescript
Query Parameters:
- status?: string
- search?: string
- page?: number
- limit?: number

Response:
{
  branding: Array<BrandingOpportunity>;
  total: number;
  page: number;
  totalPages: number;
}
```

#### PATCH `/api/admin/branding/:id`
Update branding opportunity
```typescript
Request Body:
{
  status?: string;
  artworkUrl?: string;
  specifications?: object;
}

Response:
{
  success: boolean;
  branding: BrandingOpportunity;
}
```

#### POST `/api/admin/emails/send`
Send email to customer
```typescript
Request Body:
{
  bookingId: string;
  template: 'confirmation' | 'follow-up' | 'custom';
  subject?: string;
  message?: string;
}

Response:
{
  success: boolean;
  message: string;
}
```

#### GET `/api/admin/activity-log`
Get activity log
```typescript
Query Parameters:
- entityType?: string
- entityId?: string
- userId?: string
- startDate?: timestamp
- endDate?: timestamp
- page?: number
- limit?: number

Response:
{
  logs: Array<ActivityLog>;
  total: number;
  page: number;
  totalPages: number;
}
```

#### GET `/api/admin/export/bookings`
Export bookings to CSV
```typescript
Query Parameters:
- type?: string
- status?: string
- startDate?: timestamp
- endDate?: timestamp

Response: CSV file download
```

---

## 3. Email System

### Email Service Setup
- Use Resend, SendGrid, or similar service
- Configure SMTP settings
- Set up email templates

### Email Templates Needed

#### Customer Emails

**1. Ticket Booking Confirmation (Initial)**
```
Subject: Your Illuminate Life Ticket Confirmation - [Booking ID]

Hi [Customer Name],

Thank you for reserving your place at Illuminate Life!

Booking Details:
- Ticket Type: [Ticket Tier]
- Quantity: [Quantity]
- Total Amount: $[Total]
- Booking ID: [ID]

Our team will reach out within 24-48 hours to complete your reservation and arrange payment.
Once confirmed, you will receive your seat assignments.

If you have any questions, please reply to this email.

Best regards,
Illuminate Life Team
```

**2. Seat Assignment Confirmation**
```
Subject: Your Seat Assignment - Illuminate Life [Booking ID]

Hi [Customer Name],

Great news! Your seats have been assigned for Illuminate Life.

Booking Details:
- Ticket Type: [Ticket Tier]
- Booking ID: [ID]

Seat Assignment:
- Section: [Section Name]
- Table Number: [Table Number] (if applicable)
- Seat Numbers: [Seat Numbers - e.g., A1, A2, A3]

Event Details:
- Date: [Event Date]
- Time: [Event Time]
- Venue: [Venue Name]
- Address: [Venue Address]

Please save this email for your records. Present your booking ID at check-in.

We look forward to seeing you!

Best regards,
Illuminate Life Team
```

**3. Sponsor Inquiry Received**
```
Subject: Thank You for Your Sponsorship Interest - Illuminate Life

Hi [Contact Name],

Thank you for your interest in sponsoring Illuminate Life!

Inquiry Details:
- Company: [Company Name]
- Tier: [Sponsor Tier]
- Inquiry ID: [ID]

Our partnerships team will contact you within 24 hours to discuss the opportunity and benefits.

Best regards,
Illuminate Life Partnerships Team
```

**4. Branding Inquiry Received**
```
Subject: Branding Opportunity Inquiry Received - Illuminate Life

Hi [Contact Name],

Thank you for your interest in branding opportunities at Illuminate Life!

Inquiry Details:
- Company: [Company Name]
- Type: [Branding Type]
- Inquiry ID: [ID]

Our team will reach out shortly to discuss specifications and next steps.

Best regards,
Illuminate Life Team
```

#### Admin Notification Emails

**1. New Booking Alert**
```
Subject: New Booking - [Type] - [Booking ID]

New booking received:

Type: [ticket/sponsor/branding]
Customer: [Name]
Email: [Email]
Phone: [Phone]
Amount: $[Total]
Time: [Timestamp]

View in dashboard: [Link]
```

**2. Daily Summary**
```
Subject: Daily Booking Summary - [Date]

Today's Activity:

New Bookings: [Count]
- Tickets: [Count]
- Sponsors: [Count]
- Branding: [Count]

Total Revenue: $[Amount]

Pending Follow-ups: [Count]

View dashboard: [Link]
```

---

## 4. Admin Dashboard Features

### Dashboard Overview Page
- Total bookings count
- Revenue summary (by type)
- Tickets sold breakdown (Individual, Table, VIP)
- Sponsor inquiries count
- Branding inquiries count
- Recent bookings (last 10)
- Pending follow-ups
- Quick stats cards

### Bookings Management Page
- Searchable/filterable table
- Columns: ID, Date, Type, Customer, Contact, Amount, Seats, Status, Actions
- Filter by: Type, Status, Date range, Section
- Search by: Name, Email, Phone, Company, Seat Number
- Bulk actions: Export, Send emails
- Status update dropdown
- View details modal
- Add admin notes
- Set follow-up reminders
- Assign seats button
- View seat assignments

### Seat Management Page
- Visual seating chart (optional)
- Seat inventory table
- Filter by: Section, Type, Availability
- Search by seat number
- Bulk seat creation
- Assign/release seats
- View booking details for reserved seats
- Availability overview by section
- Export seating chart

### Sponsor Management Page
- List all sponsor inquiries
- Filter by status
- Update status workflow
- Upload logos
- Set display order
- Activate/deactivate sponsors
- View contact details
- Track communication history

### Branding Management Page
- List all branding inquiries
- Filter by status and type
- Upload artwork
- Approve/reject requests
- Track specifications
- View contact details

### Activity Log Page
- Chronological list of all actions
- Filter by: Entity type, User, Date range
- Search functionality
- Export to CSV

### Settings Page
- Admin user management
- Email template editor
- System configuration
- Export/import data

---

## 5. Technical Implementation

### Recommended Tech Stack

**Database:**
- PostgreSQL with Prisma ORM
- OR MongoDB with Mongoose

**Email Service:**
- Resend (modern, Next.js friendly)
- OR SendGrid
- OR Nodemailer with SMTP

**Authentication:**
- NextAuth.js (recommended for Next.js)
- OR JWT with bcrypt for password hashing

**File Storage (for logos/artwork):**
- Vercel Blob Storage
- OR AWS S3
- OR Cloudinary

**API Framework:**
- Next.js API Routes (app/api directory)

### Security Requirements
- Rate limiting on public endpoints (prevent spam)
- CAPTCHA on booking forms (optional but recommended)
- JWT authentication for admin routes
- Password hashing with bcrypt (min 10 rounds)
- Input validation and sanitization
- CORS configuration
- SQL injection prevention (use ORM)
- XSS protection

### Validation Rules
- Email format validation
- Phone number format validation
- Required field checks
- Price/amount validation (positive numbers)
- Quantity limits (e.g., max 10 for table bookings)
- String length limits
- Sanitize HTML in text inputs
- Seat number format validation
- Prevent double-booking of seats
- Validate seat availability before assignment
- Ensure quantity matches number of seats assigned

---

## 6. Implementation Steps

### Phase 1: Database Setup
1. Install Prisma and PostgreSQL
2. Create schema.prisma file
3. Run migrations
4. Seed initial admin user
5. Create seat inventory (seed seats based on venue layout)

### Phase 2: Public API Endpoints
1. Create booking endpoints (ticket, sponsor, branding)
2. Implement validation
3. Set up email service
4. Create email templates
5. Test booking flow

### Phase 3: Admin Authentication
1. Set up NextAuth.js or JWT auth
2. Create login endpoint
3. Implement middleware for protected routes
4. Create admin user management

### Phase 4: Admin API Endpoints
1. Dashboard stats endpoint
2. Bookings CRUD endpoints
3. Seat management endpoints
4. Seat assignment functionality
5. Sponsors management endpoints
6. Branding management endpoints
7. Activity log endpoints
8. Export functionality

### Phase 5: Admin Dashboard UI
1. Create admin layout
2. Build dashboard overview
3. Build bookings management page
4. Build seat management page
5. Build seat assignment interface
6. Build sponsors management page
7. Build branding management page
8. Build activity log page
9. Build settings page

### Phase 6: Testing & Deployment
1. Test all endpoints
2. Test email delivery
3. Test admin workflows
4. Set up environment variables
5. Deploy to production
6. Monitor and fix issues

---

## 7. Environment Variables Needed

```env
# Database
DATABASE_URL="postgresql://..."

# Email Service
EMAIL_SERVICE_API_KEY="..."
EMAIL_FROM="noreply@illuminatelife.com"
ADMIN_NOTIFICATION_EMAIL="admin@illuminatelife.com"

# Authentication
NEXTAUTH_SECRET="..."
NEXTAUTH_URL="https://yourdomain.com"
JWT_SECRET="..."

# File Storage (if using cloud storage)
AWS_ACCESS_KEY_ID="..."
AWS_SECRET_ACCESS_KEY="..."
AWS_S3_BUCKET="..."
# OR
BLOB_READ_WRITE_TOKEN="..."

# Admin (initial setup)
INITIAL_ADMIN_EMAIL="admin@illuminatelife.com"
INITIAL_ADMIN_PASSWORD="..."

# Rate Limiting
RATE_LIMIT_MAX_REQUESTS="10"
RATE_LIMIT_WINDOW_MS="60000"
```

---

## 8. Seat Management Features

### Seat Assignment Workflow
1. Customer submits booking (no seats assigned yet)
2. Admin reviews booking in dashboard
3. Admin assigns available seats based on:
   - Ticket tier (VIP gets front sections)
   - Table bookings get grouped seats
   - Customer preferences
4. System validates seat availability
5. Seats marked as reserved
6. Confirmation email sent with seat numbers
7. Customer receives seat assignment

### Seat Numbering Convention
- Individual seats: A1, A2, B1, B2, etc.
- Table seats: T1-S1, T1-S2 (Table 1, Seat 1, 2, etc.)
- VIP sections: VIP-A1, VIP-A2, etc.
- Sections: VIP Section, Front Section, General Section

### Capacity Management
- Track total venue capacity (e.g., 500 seats)
- Track available seats by section
- Alert when sections are near capacity
- Prevent overbooking
- Waitlist for sold-out sections

## 9. Additional Features (Optional/Future)

- Visual seating chart with drag-and-drop assignment
- SMS notifications via Twilio
- Calendar invite generation (.ics files)
- PDF ticket generation with QR codes
- Check-in system (scan QR codes at venue)
- CRM integration (Salesforce, HubSpot)
- Automated follow-up reminders
- Waitlist functionality
- Multi-language support
- Advanced analytics and reporting
- Webhook support for integrations
- Seat swap/transfer functionality

---

## 9. Monitoring & Maintenance

### Logging
- Log all API requests
- Log email send attempts
- Log authentication attempts
- Log errors and exceptions

### Monitoring
- Database connection health
- Email delivery rates
- API response times
- Error rates
- Booking conversion rates

### Backups
- Daily database backups
- Store backups for 30 days
- Test restore procedures

### Maintenance Tasks
- Clean up old activity logs (>90 days)
- Archive completed bookings
- Update email templates
- Review and update admin users
- Security updates

---

## Summary

This backend system provides:
- ✅ Ticket booking submission
- ✅ Sponsor inquiry submission
- ✅ Branding inquiry submission
- ✅ Automated email confirmations
- ✅ Seat assignment and management
- ✅ Seat inventory tracking
- ✅ Admin dashboard for management
- ✅ Manual follow-up workflow
- ✅ Activity tracking
- ✅ Export capabilities
- ✅ Secure authentication
- ✅ Comprehensive logging

No payment processing - all financial transactions handled manually by admin team after initial inquiry.

Customers receive seat numbers after admin confirms their booking and assigns seats.
