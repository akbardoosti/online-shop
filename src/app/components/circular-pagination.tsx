import React from "react";
import { IconButton, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export function SimplePagination() {
    const [active, setActive] = React.useState(1);

    const next = () => {
        if (active === 10) return;

        setActive(active + 1);
    };

    const prev = () => {
        if (active === 1) return;

        setActive(active - 1);
    };

    return (
        <div className="flex items-center gap-8 justify-between w-full">
            <IconButton
                size="sm"
                color='red'
                variant="outlined"
                onClick={prev}
                disabled={active === 1}
            >
                <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
            </IconButton>
            <Typography  color="gray" className="font-normal site-font text-sm md:text-lg">
                صفحه <strong className="text-gray-900">{active}</strong> از {" "}
                <strong className="text-gray-900">10</strong>
            </Typography>
            <IconButton
                color='red'
                size="sm"
                variant="outlined"
                onClick={next}
                disabled={active === 10}
            >
                <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
            </IconButton>
        </div>
    );
}