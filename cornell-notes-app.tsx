import React, { useMemo, useState } from 'react';
import {
  Calendar,
  Clock4,
  CreditCard,
  MapPin,
  Search,
  Sparkles,
  Star,
  Users,
  UtensilsCrossed,
  Wine,
  Smartphone,
  ShieldCheck,
  ConciergeBell,
  BadgeCheck
} from 'lucide-react';

function CornellNotesApp() {
  const restaurants = useMemo(() => ([
    {
      id: 1,
      name: 'Maison Aurelia',
      location: 'Upper East Side, NYC',
      cuisine: 'Modern French',
      rating: 4.9,
      seats: '24-seat salon',
      tags: ['Chef’s Counter', 'Michelin curated', 'Seasonal menu'],
      menu: [
        {
          category: 'Signature Plates',
          items: [
            {
              name: 'Butter-Poached Lobster',
              description: 'Preserved Meyer lemon, vanilla beurre blanc, Oscietra caviar',
              price: '$78',
              pairing: '2014 Puligny-Montrachet, Domaine Leflaive'
            },
            {
              name: 'Wagyu Tenderloin Rossini',
              description: 'Foie gras torchon, black truffle jus, pommes Anna',
              price: '$96',
              pairing: '2016 Château Pichon Baron, Pauillac'
            },
            {
              name: 'Wild Turbot en Papillote',
              description: 'Champagne velouté, baby leeks, Petrossian smoked roe',
              price: '$82',
              pairing: '2018 Domaine Weinbach Riesling Cuvée Théo'
            }
          ]
        },
        {
          category: 'Tasting Journey',
          items: [
            {
              name: 'Eight-Course Impression',
              description: 'Chef Aurelia’s seasonal progression, personalized pacing',
              price: '$245 pp'
            },
            {
              name: 'Plant-Forward Atelier',
              description: 'Heritage vegetables, fermented notes, cedar smoke finale',
              price: '$195 pp'
            }
          ]
        }
      ],
      experiences: [
        {
          title: 'Caviar & Champagne Salon',
          detail: 'Krug Grand Cuvée service with paired Petrossian flight',
          price: '$165',
          duration: '45 minutes'
        },
        {
          title: 'Chef’s Table for Two',
          detail: 'Seven-course chef interaction with cellar unlocks',
          price: '$420',
          duration: '2 hours'
        }
      ]
    },
    {
      id: 2,
      name: 'Sierra Verde',
      location: 'Napa Valley, CA',
      cuisine: 'Estate Farm-to-Table',
      rating: 4.8,
      seats: 'Garden terrace & cave',
      tags: ['Biodynamic', 'Wine library', 'Open fire hearth'],
      menu: [
        {
          category: 'Estate Plates',
          items: [
            {
              name: 'Hearth-Roasted Carrots',
              description: 'Smoked yogurt, bronze fennel, citrus ash',
              price: '$38',
              pairing: 'Estate Albariño, concrete aged'
            },
            {
              name: 'Dry-Aged Duck Crown',
              description: 'Fig lacquer, burnt honey, bay laurel jus',
              price: '$62',
              pairing: 'Library Pinot Noir, Mount Veeder'
            },
            {
              name: 'Live Fire Sea Bass',
              description: 'Preserved lemon kosho, grilled artichokes, sorrel oil',
              price: '$54',
              pairing: 'Estate Chardonnay, amphora aged'
            }
          ]
        }
      ],
      experiences: [
        {
          title: 'Winemaker’s Library Tasting',
          detail: 'Vertical pourings with seasonal canapés',
          price: '$210',
          duration: '90 minutes'
        },
        {
          title: 'Vineyard Sunset Table',
          detail: 'Open-air five-course dinner with live harpist',
          price: '$280',
          duration: '2.5 hours'
        }
      ]
    }
  ]), []);

  const [selectedRestaurant, setSelectedRestaurant] = useState(restaurants[0]);
  const [searchTerm, setSearchTerm] = useState('');
  const [reservation, setReservation] = useState({
    partySize: 2,
    date: new Date().toISOString().split('T')[0],
    time: '19:00',
    seating: 'Chef’s counter',
    experience: 'Caviar & Champagne Salon',
    note: 'Discreet celebration setup',
    paymentMethod: 'Private card concierge'
  });

  const filteredRestaurants = useMemo(() =>
    restaurants.filter(r =>
      r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.cuisine.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    ),
  [restaurants, searchTerm]);

  const updateReservation = (field, value) => {
    setReservation(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 text-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-10 space-y-8">
        <header className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 ring-1 ring-white/10 text-sm text-amber-200">
              <Sparkles size={16} />
              White-glove dining host preview
            </div>
            <h1 className="text-3xl lg:text-4xl font-semibold text-white">
              Privé Atelier — Luxury Food & Dining Concierge
            </h1>
            <p className="text-gray-300 max-w-2xl">
              Showcase curated tasting rooms, signature menus, and effortless reservation flows.
              Tailored for restaurateurs welcoming discerning guests with premium payment and booking options.
            </p>
            <div className="flex gap-3">
              <button className="px-4 py-2 rounded-lg bg-amber-500 text-gray-900 font-semibold hover:bg-amber-400 transition">
                Schedule a hosted preview
              </button>
              <button className="px-4 py-2 rounded-lg border border-white/20 text-gray-100 hover:border-amber-400 transition">
                Download sample menu pack
              </button>
            </div>
          </div>
          <div className="w-full lg:w-96 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur">
            <div className="flex items-center gap-3 mb-4">
              <ConciergeBell className="text-amber-400" />
              <div>
                <p className="text-xs uppercase text-gray-400 tracking-[0.2em]">Host uptime</p>
                <p className="text-lg font-semibold text-white">24/7 white-glove support</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-200">
              <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                <p className="text-xs text-gray-400">Average response</p>
                <p className="text-lg font-semibold text-white"><span className="text-amber-400">2m</span> concierge chat</p>
              </div>
              <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                <p className="text-xs text-gray-400">Payment methods</p>
                <p className="text-lg font-semibold text-white">Cards · Apple Pay · Wire</p>
              </div>
              <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                <p className="text-xs text-gray-400">Yield boost</p>
                <p className="text-lg font-semibold text-white">+18% premium bookings</p>
              </div>
              <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                <p className="text-xs text-gray-400">Coverage</p>
                <p className="text-lg font-semibold text-white">Global fine-dining cities</p>
              </div>
            </div>
          </div>
        </header>

        <section className="grid lg:grid-cols-[1.4fr_1fr] gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-full">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <input
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by restaurant, cuisine, or tags"
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-gray-100 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>
              <button className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-100 hover:border-amber-400">
                Curated list
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {filteredRestaurants.map(restaurant => (
                <button
                  key={restaurant.id}
                  onClick={() => setSelectedRestaurant(restaurant)}
                  className={`w-full text-left p-4 rounded-2xl border transition backdrop-blur ${
                    selectedRestaurant.id === restaurant.id
                      ? 'border-amber-400 bg-amber-400/10'
                      : 'border-white/10 bg-white/5 hover:border-amber-400'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-semibold text-white">{restaurant.name}</h3>
                        <BadgeCheck className="text-amber-400" size={16} />
                      </div>
                      <p className="text-sm text-gray-400">{restaurant.cuisine} · {restaurant.location}</p>
                      <div className="flex items-center gap-3 mt-2 text-sm text-gray-200">
                        <span className="inline-flex items-center gap-1"><Star size={14} className="text-amber-400" /> {restaurant.rating}</span>
                        <span className="inline-flex items-center gap-1"><Users size={14} /> {restaurant.seats}</span>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {restaurant.tags.map(tag => (
                          <span key={tag} className="px-2 py-1 text-xs rounded-full bg-white/5 text-amber-200 border border-white/10">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-black/30 border border-white/10 text-sm text-gray-200 flex flex-col gap-1">
                      <span className="flex items-center gap-1"><MapPin size={14} /> Concierge pickup</span>
                      <span className="flex items-center gap-1"><Wine size={14} /> Cellar pairing</span>
                      <span className="flex items-center gap-1"><UtensilsCrossed size={14} /> Chef tasting</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="rounded-2xl bg-white/5 border border-white/10 p-6 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Featured menu preview</p>
                  <h2 className="text-xl font-semibold text-white">{selectedRestaurant.name}</h2>
                </div>
                <div className="flex items-center gap-2 text-sm text-amber-200">
                  <Sparkles size={16} /> Curated for your guests
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {selectedRestaurant.menu.map(section => (
                  <div key={section.category} className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-lg bg-amber-400/20 border border-amber-400/40 flex items-center justify-center">
                        <UtensilsCrossed className="text-amber-300" size={16} />
                      </div>
                      <h3 className="text-lg font-semibold text-white">{section.category}</h3>
                    </div>
                    <div className="space-y-3">
                      {section.items.map(item => (
                        <div key={item.name} className="p-3 rounded-xl bg-black/30 border border-white/10">
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <div className="flex items-center gap-2">
                                <p className="font-semibold text-white">{item.name}</p>
                                <span className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                                  {selectedRestaurant.cuisine}
                                </span>
                              </div>
                              <p className="text-sm text-gray-400 mt-1">{item.description}</p>
                              {item.pairing && (
                                <p className="text-xs text-amber-200 mt-2 inline-flex items-center gap-1">
                                  <Wine size={14} /> Pairing: {item.pairing}
                                </p>
                              )}
                            </div>
                            <p className="text-amber-400 font-semibold whitespace-nowrap">{item.price}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-5 space-y-4">
              <div className="flex items-center gap-3">
                <Calendar className="text-amber-400" />
                <div>
                  <p className="text-sm text-gray-400">Reservation preview</p>
                  <h3 className="text-lg font-semibold text-white">Hold a table instantly</h3>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <label className="space-y-1">
                  <span className="text-gray-400">Party size</span>
                  <input
                    type="number"
                    min={1}
                    value={reservation.partySize}
                    onChange={(e) => updateReservation('partySize', Number(e.target.value))}
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </label>
                <label className="space-y-1">
                  <span className="text-gray-400">Seating preference</span>
                  <select
                    value={reservation.seating}
                    onChange={(e) => updateReservation('seating', e.target.value)}
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  >
                    <option>Chef’s counter</option>
                    <option>Corner banquette</option>
                    <option>Private alcove</option>
                    <option>Garden terrace</option>
                  </select>
                </label>
                <label className="space-y-1">
                  <span className="text-gray-400">Date</span>
                  <input
                    type="date"
                    value={reservation.date}
                    onChange={(e) => updateReservation('date', e.target.value)}
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </label>
                <label className="space-y-1">
                  <span className="text-gray-400">Time</span>
                  <input
                    type="time"
                    value={reservation.time}
                    onChange={(e) => updateReservation('time', e.target.value)}
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </label>
              </div>

              <div className="space-y-3">
                <label className="space-y-1 text-sm">
                  <span className="text-gray-400">Curated experience</span>
                  <select
                    value={reservation.experience}
                    onChange={(e) => updateReservation('experience', e.target.value)}
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  >
                    {selectedRestaurant.experiences.map(option => (
                      <option key={option.title} value={option.title}>{option.title} — {option.price}</option>
                    ))}
                  </select>
                </label>
                <label className="space-y-1 text-sm">
                  <span className="text-gray-400">Guest preferences</span>
                  <textarea
                    value={reservation.note}
                    onChange={(e) => updateReservation('note', e.target.value)}
                    placeholder="Allergies, celebration notes, chauffeur timing..."
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-amber-400"
                    rows={3}
                  />
                </label>
              </div>

              <div className="p-4 rounded-xl bg-black/30 border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-sm text-amber-200">
                  <Sparkles size={16} /> Preferred payment & verifications
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  {['Private card concierge', 'Apple Pay / Tap to Pay', 'Google Pay', 'Bank transfer (same-day)', 'Amex / Visa / MC', 'Wire with deposit hold'].map(method => (
                    <label key={method} className={`flex items-center gap-2 p-3 rounded-lg border cursor-pointer transition ${
                      reservation.paymentMethod === method
                        ? 'border-amber-400 bg-amber-400/10'
                        : 'border-white/10 bg-white/5 hover:border-amber-400'
                    }`}>
                      <input
                        type="radio"
                        name="payment"
                        value={method}
                        checked={reservation.paymentMethod === method}
                        onChange={() => updateReservation('paymentMethod', method)}
                        className="accent-amber-400"
                      />
                      <span>{method}</span>
                    </label>
                  ))}
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-300">
                  <ShieldCheck size={16} className="text-amber-400" />
                  PCI-compliant tokenization, pre-auth holds, and instant refunds supported.
                </div>
              </div>

              <button className="w-full py-3 rounded-xl bg-amber-500 text-gray-900 font-semibold hover:bg-amber-400 transition">
                Confirm hosted demo reservation
              </button>
            </div>

            <div className="rounded-2xl bg-white/5 border border-white/10 p-5 space-y-4">
              <div className="flex items-center gap-3">
                <Clock4 className="text-amber-400" />
                <div>
                  <p className="text-sm text-gray-400">Curated experiences</p>
                  <h3 className="text-lg font-semibold text-white">Elevated add-ons</h3>
                </div>
              </div>
              <div className="space-y-3">
                {selectedRestaurant.experiences.map(exp => (
                  <div key={exp.title} className="p-3 rounded-xl bg-black/30 border border-white/10 flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold text-white">{exp.title}</p>
                      <p className="text-sm text-gray-400">{exp.detail}</p>
                      <p className="text-xs text-amber-200 mt-1">{exp.duration}</p>
                    </div>
                    <span className="text-amber-400 font-semibold whitespace-nowrap">{exp.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-white/5 border border-white/10 p-5 space-y-4">
              <div className="flex items-center gap-3">
                <CreditCard className="text-amber-400" />
                <div>
                  <p className="text-sm text-gray-400">Payment orchestration</p>
                  <h3 className="text-lg font-semibold text-white">Every form of tender</h3>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm text-gray-200">
                <div className="p-3 rounded-xl bg-black/30 border border-white/10 flex items-center gap-2">
                  <Smartphone className="text-amber-400" size={18} /> Tap-to-pay wallets
                </div>
                <div className="p-3 rounded-xl bg-black/30 border border-white/10 flex items-center gap-2">
                  <CreditCard className="text-amber-400" size={18} /> Metal & premium cards
                </div>
                <div className="p-3 rounded-xl bg-black/30 border border-white/10 flex items-center gap-2">
                  <ShieldCheck className="text-amber-400" size={18} /> Verified wire deposits
                </div>
                <div className="p-3 rounded-xl bg-black/30 border border-white/10 flex items-center gap-2">
                  <BadgeCheck className="text-amber-400" size={18} /> Corporate invoicing
                </div>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-amber-400/40 text-sm text-gray-100">
                Real-time authorization, gratuity presets, split bills, and multi-currency support showcased in the demo booking.
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CornellNotesApp;
