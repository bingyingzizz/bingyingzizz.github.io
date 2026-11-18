# Splitting of Monomorphisms into an Injective　`prop.injective-splitting`
English entry · root `../`
[in graph](../#n=prop.injective-splitting)　·　[Chinese page (authoritative)](./prop.injective-splitting.md)

- (1) $\implies$ (2): **One line** (injectivity gives the retraction directly).
- (2) $\implies$ (3): **Use a pushout diagram**. Given $0 \to I \to M \to M_{2} \to 0$, apply (2) to $I \rightarrowtail M$ to obtain a splitting.
- (3) $\implies$ (1): **This step uses a lift**. Given $I \rightarrowtail M$ and $I \to N$, form the pushout $M \to P$. Then $0 \to N \to P \to \operatorname{coker} \to 0$ splits, and composing the section with $M \to P$ gives a lift of $M \to N$. ⚠️ **Pushouts must exist** (as they always do in an abelian category). Enough injectives are unnecessa

> continued in nodes/prop.injective-splitting.en.6.md
