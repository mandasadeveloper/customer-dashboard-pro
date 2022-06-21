import React, { useState, useCallback } from "react";

import {
  AppProvider,
  Card,
  Icon,
  Stack,
  Heading,
  Tooltip
} from "@shopify/polaris";
import { DragHandleMinor } from "@shopify/polaris-icons";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import en from "@shopify/polaris/locales/en.json";

function ListItem(props) {
  const { id, index, title } = props;

  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => {
        return (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            style={
              snapshot.isDragging
                ? { background: "white", ...provided.draggableProps.style }
                : provided.draggableProps.style
            }
          >
           <Card>
            <Card.Section>
            <Stack alignment="center">
                <div {...provided.dragHandleProps}>
                  <Tooltip content="Drag to reorder list items">
                    <Icon source={DragHandleMinor} color="inkLightest" />
                  </Tooltip>
                </div>
                <Heading>{title}</Heading>
              </Stack>
            </Card.Section>
           </Card>
          </div>
        );
      }}
    </Draggable>
  );
}

function List({value}) {
  const [items, setItems] = useState(value);

  const handleDragEnd = useCallback(({ source, destination }) => {
    setItems(oldItems => {
      const newItems = oldItems.slice(); // Duplicate
      const [temp] = newItems.splice(source.index, 1);
      newItems.splice(destination.index, 0, temp);
      return newItems;
    });
  }, []);

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="root">
        {provided => {
          return (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {items.map((item, index) => (
                <ListItem
                  key={item.id}
                  id={item.id}
                  index={index}
                  title={item.title}
                />
              ))}
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </DragDropContext>
  );
}

export function ProfileReorder({value}) {
  return (
    <AppProvider i18n={en}>
        <Card>
          <List value={value}/>
        </Card>
    </AppProvider>
  );
}
