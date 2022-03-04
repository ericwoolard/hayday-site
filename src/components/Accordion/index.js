import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

export default function example() {
    return (
        <Accordion>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Will there be parking?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Parking will be provided on a first come, first served basis. 
                    Passes will ONLY be sold on-site until capacity has been reached.
                    Parking passes are included with a VIP ticket, or available for $15
                    on-site.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Parking passes are sold out, how can I get to the show?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    So you’ve missed out on parking, but you still have a couple of options.<br/>
                    Option 1 - try to carpool with a friend who already has a pass.<br/>
                    Option 2 - Catch one of the buses running to and from the event. Both GA and
                    VIP tickets include a free bus pass!
                     <br/>
                    Option 3 - check availability for Uber/Lyft or local cab company that 
                    you trust to pick you up and deliver you safely 
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Where does the bus pick up and drop off from?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>The bus will pickup all day on fraternity row in the cotton district, and will drop you 
                    off at the venue.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    The bus is taking too long, what if I miss the show? 
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Our advice would be to show up early to the bus stop if you want to be 
                    at the event at a certain time, otherwise you’ll have to wait your turn 
                    just like everyone else.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Can I bring food/drink inside?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Unfortunately, no. With the MS Horse park being an extension of MSU you 
                    should treat it like you would any other university sporting event. 
                    Same rules apply. <br/>We do offer accommodations for those who have health 
                    related requirements. If this is the case, please let us know so that we 
                    can notify gate security to allow entry.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    What items are not allowed at the festival?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    The following items are prohibited:<br/> 
                    • No outside food or drinks of any kind <br/>
                    • No coolers of any kind<br/>
                    • No tents, hammocks or cannopies. Lawn chairs and blankets ARE allowed <br/>
                    • No bicycles, skateboards, scooters, etc<br/>
                    • No weapons of any kind <br/>
                    • No pets unless you provide ESA documents <br/>
                    • No smoking allowed on site <br/>
                    • No generators <br/>
                    • No portable lasers or laser pens <br/>
                    • No illegal substances <br/>
                    • No drones, professional cameras, or cameras with removable lenses<br/><br/>
                    • If you have something you want to bring and are unsure if it will be allowed, please email us 
                    at haydaymusicfest@gmail.com <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Can I bring my ESA?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    There will be no animals allowed inside the gates of the horse park 
                    unless proper ESA documentation is provided for health reasons at the 
                    point of entry. <br/>The only exception to this rule is that no animals, 
                    including ESA's, shall be allowed to travel by bus to or from the event. 
                    This is for the safety of the animal.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Will there be alcohol?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Yes, just make sure to get the over 21 wristband before you make a purchase. &nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Where is the lost and found?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    The lost and found will be at the security command center located at the 
                    center of the site.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Will there still be a concert if it rains?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Depending on how bad it is or how long it lasts, we may have to move it 
                    under the pavilion. Worst case scenario is postponement, but let’s 
                    cultivate happy thoughts and speak good weather into existence.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    );
}