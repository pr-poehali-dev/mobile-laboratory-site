CREATE TABLE IF NOT EXISTS bookings (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    email VARCHAR(255),
    company VARCHAR(255),
    service VARCHAR(255) NOT NULL,
    preferred_date DATE,
    message TEXT,
    status VARCHAR(50) DEFAULT 'new',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_bookings_status ON bookings(status);
CREATE INDEX idx_bookings_created_at ON bookings(created_at DESC);

COMMENT ON TABLE bookings IS 'Заявки на услуги электролаборатории';
COMMENT ON COLUMN bookings.status IS 'Статус заявки: new, processing, completed, cancelled';