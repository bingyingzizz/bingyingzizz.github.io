# Boolean ring　`def.boolean-ring`
English entry · root `../`
[in graph](../#n=def.boolean-ring)　·　[Chinese page (authoritative)](./def.boolean-ring.md)

## Notes · **draft**
**Idempotence pins rings down tightly**. Expanding $(x + y)^{2} = x + y$ gives $xy + yx = 0$; from $(x+x)^{2} = x+x$ one gets $2x = 0$. Together: a Boolean ring is **automatically commutative**, and **has characteristic $2$**. So a Boolean ring contains no "real" numbers, only the algebra of "yes / no".

**It is the same thing as a Boolean algebra (a complemented distributive lattice)**. The lattice operations translate into ring operations:

- $a \wedge b = ab$ (meet = multiplication);
- $a \vee b = a + b + ab$ (join = addition plus the overlap);
- $\neg a = 1 + a$ (complement = sum with the unit).

> continued in nodes/def.boolean-ring.en.3.md
