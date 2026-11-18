# k-bounded completion　`lem.k-bounded-completion`
English entry · root `../`
[in graph](../#n=lem.k-bounded-completion)　·　[Chinese page (authoritative)](./lem.k-bounded-completion.md)

Thus
$$\|s - ds'\| \le \|s-t\| + K\|dt\| + \frac{\varepsilon}{2} = K\|ds\| + \Bigl(\|s-t\| + K\|ds - dt\| + \frac{\varepsilon}{2}\Bigr) \le K\|ds\| + \varepsilon .$$
- **$\Longleftarrow$**: Given $s \in M^{n} \subseteq \widehat{M}^{n}$.

By the boundedness of $\widehat{M}^{\bullet}$ with bound $K$, choose $t' \in \widehat{M}^{n+1}$ such that $\|s - dt'\| \le K\|ds\| + \frac{\varepsilon}{2}$;

then by density, choose $s' \in M^{n+1}$ such that $\|s' - t'\| \le \frac{\varepsilon}{2(1+\|d^{n+1}\|)}$.

Thus $\|s - ds'\| \le K\|ds\| + \varepsilon$.

∎

> continued in nodes/lem.k-bounded-completion.en.5.md
