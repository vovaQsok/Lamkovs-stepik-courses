import Plans from "@/sections/Plans";
import PlansComparison from "@/sections/PlansComparison";

export const metadata = {
    title: 'Subscription',
}

export default function () {
    return (
        <>
            <Plans />
            <PlansComparison />
        </>
    )
}