# Compactly Generated Spaces Are Cartesian Closed　`prop.cg-cartesian-closed`
English entry · root `../`
[in graph](../#n=prop.cg-cartesian-closed)　·　[Chinese page (authoritative)](./prop.cg-cartesian-closed.md)

$$C\bigl(k(X \times Y),\ Z\bigr) \;\cong\; C\bigl(X,\ C(Y, Z)\bigr),$$

then use Yoneda's lemma to reduce "a homeomorphism over $kC$" to "equality of mapping sets for every compactly generated test space $T$":

$$C\bigl(T,\ kC(k(X\times Y), kZ)\bigr) \cong C\bigl(k(T\times X\times Y),\ Z\bigr) \cong C\bigl(T,\ kC(kX, kC(kY,kZ))\bigr).$$

Both times only associativity of the product and functoriality of $k$-ification are used — which is also why one must **take the $k$-ification first**: without it the right-hand $C(Y,Z)$ need not be compactly generated.

> continued in nodes/prop.cg-cartesian-closed.en.4.md
