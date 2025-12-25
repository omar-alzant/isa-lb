"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';
import { FiPhoneCall, FiInfo } from 'react-icons/fi';

export default function HotlinePage() {
  const programedByContact = `https://wa.me/96176118290?text=Hello, How are you?`;

  const hotlines = [
    { city: "طرابلس", numbers: ["06/433833", "76/433833"] },
    { city: "الضنية سير", numbers: ["06/490111", "81/490111"] },
    { city: "القلمون", numbers: ["06/400700", "76/543281"] },
    { city: "عرسال", numbers: ["76/364050"] },
    { city: "البقاع – الرفيد", numbers: ["28/514222", "70/514222"] },
    { city: "البقاع – برالياس", numbers: ["28/514222", "70/514222"] },
  ];

  return (
    <div className="bg-light min-vh-100 py-5" dir="rtl">
      <Container style={{ maxWidth: '500px' }}>
        
        {/* Header Section */}
        <div className="text-center mb-5">
          <div className="text-white d-inline-block p-3 rounded-circle mb-3 shadow">
            <Image 
            width='50px'
            height='50px'
              src="ISALogo.png"
              alt="ISA-LB logo"
            />
          </div>
          <h1 className="fw-bold text-dark h2">الأرقام الساخنة</h1>
          <p className="text-muted">انقر على الرقم للاتصال المباشر</p>
        </div>

        {/* List of Regions */}
        <div className="d-grid gap-3">
          {hotlines.map((item, index) => (
            <Card key={index} className="border-0 shadow-sm rounded-4">
              <Card.Body className="p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-danger opacity-75 rounded-pill px-3 py-1 text-white small fw-bold">
                    {item.city}
                  </div>
                </div>

                <div className="d-grid gap-2">
                  {item.numbers.map((num, idx) => (
                    <Button
                      key={idx}
                      variant="outline-danger"
                      href={`tel:${num.replace('/', '')}`}
                      className="py-3 fw-bold rounded-3 d-flex justify-content-between align-items-center px-4 border-2"
                    >
                      <span className="fs-5" style={{ letterSpacing: '1px' }}>{num}</span>
                      <FiPhoneCall className="text-danger" />
                    </Button>
                  ))}
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>

        {/* NFC Footer */}
        <div className=" text-center mt-5 ltr">
          <Card className=" bg-dark text-white border-0 rounded-4 p-3 shadow-lg">
            <div className="d-flex align-items-center justify-content-center gap-2">
              {/* <FiInfo className="text-info" /> */}
              <div className="d-flex align-items-center gap-2 mt-3 mt-md-0">
                <p >
                  Programmed by:
                </p>
                <Button 
                  variant="link" 
                  className="d-flex gap-2 p-0 border-0 d-flex align-content-center"
                  onClick={() => window.open(programedByContact, "_blank")}
                  style={{ textDecoration: 'none' }}
                  title='3DSTL'
                >
                  <p>
                    3DSTL
                  </p>
                  <img 
                    src="/3dstlLogo.jpeg" // Replace with your logo URL
                    alt="3DSTL"
                    style={{ 
                      height: "24px", 
                      width: "auto", 
                      transition: "0.3s"
                    }}
                  />
                </Button>
            </div>
          </div>
          </Card>
        </div>

      </Container>
    </div>
  );
}