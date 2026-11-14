# addition and multiplication of natural numbers　`def.nat-arith`
English entry · root `../`
[in graph](../#n=def.nat-arith)　·　[Chinese page (authoritative)](./def.nat-arith.md)

**Properties are verified by induction** (not part of the definition): take $0 + n = n$ as an example — for $n = 0$ both sides are $0$; assuming $0 + n = n$, we get $0 + S(n) = S(0 + n) = S(n)$ ✓.

Commutativity $m + n = n + m$ first needs the two lemmas $0 + n = n$ and $S(m) + n = S(m + n)$, then induction on $n$;

associativity and distributivity $m(n+k) = mn + mk$ are proved the same way.

⭐ **This is the prototype of every later operation**: the addition of $\mathbb{Z}$ defined by $[a,b] + [c,d] := [a+c,\ b+d]$, the $+$ inside it, the addition of $\mathbb{Q}$, and termwise addition in $\mathbb{R}$ all have this same $+$ underneath.

> continued in nodes/def.nat-arith.en.4.md
