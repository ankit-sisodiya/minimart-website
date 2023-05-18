"use client";
import Link from "next/link";
import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";

function SideFilter() {
  return (
    <div className="filter">
      <div className="filterAccordain">
        <div className="filterHead">
          <h5>Category</h5>
        </div>
        <Accordion defaultActiveKey="false">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Fresh Produce</Accordion.Header>
            <Accordion.Body>
              <Link href="#">
                <p>Fresh Fruits</p>
              </Link>
              <Link href="#">
                <p>Fresh Vegetables</p>
              </Link>
              <Link href="#">
                <p>Salad & Dips</p>
              </Link>
              <Link href="#">
                <p>Organic</p>
              </Link>
              <Link href="#">
                <p>Fresh Juice</p>
              </Link>
              <Link href="#">
                <p>Bulk</p>
              </Link>
              <Link href="#">
                <p>Exotic Fruits</p>
              </Link>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Dairy & Eggs</Accordion.Header>
            <Accordion.Body>
              <Link href="#">
                <p>Milk</p>
              </Link>
              <Link href="#">
                <p>Egg</p>
              </Link>
              <Link href="#">
                <p>Cheese</p>
              </Link>
              <Link href="#">
                <p>Yoghurt</p>
              </Link>
              <Link href="#">
                <p>Non-Dairy Milk</p>
              </Link>
              <Link href="#">
                <p>Butter</p>
              </Link>
              <Link href="#">
                <p>Laban</p>
              </Link>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div className="filterAccordain">
        <div className="filterHead">
          <h5>Filter</h5>
        </div>
        <Accordion defaultActiveKey="false">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Availability</Accordion.Header>
            <Accordion.Body>
              <div className="selectFilter">
                <Form>
                  <div className="mb-3">
                    <Form.Check
                      type="checkbox"
                      id="checkbox"
                      label="InStock Products"
                    />
                  </div>
                </Form>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Brands</Accordion.Header>
            <Accordion.Body>
              <div className="selectFilter">
                <Form>
                  <div className="mb-3">
                    <Form.Check
                      type="checkbox"
                      id="checkbox"
                      label="Generic"
                    />
                  </div>
                  <div className="mb-3">
                    <Form.Check
                      type="checkbox"
                      id="checkbox"
                      label="Barakat"
                    />
                  </div>
                  <div className="mb-3">
                    <Form.Check
                      type="checkbox"
                      id="checkbox"
                      label="Florida’s Natural"
                    />
                  </div>
                  <div className="mb-3">
                    <Form.Check
                      type="checkbox"
                      id="checkbox"
                      label="KRISPR"
                    />
                  </div>
                </Form>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}

export default SideFilter;
