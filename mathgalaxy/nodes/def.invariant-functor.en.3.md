# Invariant Functor　`def.invariant-functor`
English entry · root `../`
[in graph](../#n=def.invariant-functor)　·　[Chinese page (authoritative)](./def.invariant-functor.md)

**Why it is $\operatorname{Hom}_{R[G]}(R, -)$**: an $R[G]$-linear map $f : R \to M$ is determined by $f(1)$, and $f(1) = f(g \cdot 1) = g \cdot f(1)$, so $f(1) \in M^{G}$;

conversely, given any $m \in M^{G}$ one can define $f$ in this way.

Hence $(-)^{G} = \operatorname{Hom}_{R[G]}(R, -)$ — it is left exact in its second variable.

**Left exact but not right exact**: taking invariants of a short exact sequence $0 \to L \to M \to N \to 0$ gives only

$$0 \longrightarrow L^{G} \longrightarrow M^{G} \longrightarrow N^{G},$$

and the right-hand side **does not connect**.

> continued in nodes/def.invariant-functor.en.4.md
