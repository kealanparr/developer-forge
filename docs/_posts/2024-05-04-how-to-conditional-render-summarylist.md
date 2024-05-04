---
category: snippets
tags:
  - nunjucks
date: 2024-05-04
title: How to conditional render a govukSummaryList
header-title: true
---

In Nunjucks, I had to render a conditional list of items, in a `govukSummaryList` from [the Government Design System](https://design-system.service.gov.uk/components/summary-list/)

So an example list looking something like:

```
{{ govukSummaryList({
  rows: [
    {
      key: {
        text: "Name"
      },
      value: {
        text: "Sarah Philips"
      }
    },
    {
      key: {
        text: "Email"
      },
      value: {
        text: "sarah.phillips@gmail.com"
      }
    },
    {
      key: {
        text: "Date of birth"
      },
      value: {
        text: "5 January 1978"
      }
    }
  ]
}) }}
```

But I needed the rows array to conditionally contain elements based on a check. It became sligtly harder because the conditional element was right in the middle of the list (in the above scenario, it would be email that I render conditional). This could be done slightly simpler if it was at the start or the end of the array

The solution was:

```
{% set detailRows = [
  {
    key: {
      text: "Name"
    },
    value: {
      text: "Sarah Philips"
    }
  }]
%}

{% if details.email | length %}
  {% set detailRows = (detailRows.push(
    {
      key: {
        text: "Email"
      },
      value: {
        text: "sarah.phillips@gmail.com"
      }
    }
  ), detailRows) %}
{% endif %}

{% set detailRows = (detailRows.push(
  {
    key: {
      text: "Email"
    },
    value: {
      text: "sarah.phillips@gmail.com"
    }
  }
), detailRows) %}

{{ govukSummaryList({
  rows: detailRows
}) }}
```

The above initialises an array. With all of the elements before the conditional one. Runs the conditional check inside an if block. Then pushes all the final elements after the conditional one.