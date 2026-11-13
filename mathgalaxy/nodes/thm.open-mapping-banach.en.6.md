# open mapping theorem for Banach spaces　`thm.open-mapping-banach`
English entry · root `../`
[in graph](../#n=thm.open-mapping-banach)　·　[Chinese page (authoritative)](./thm.open-mapping-banach.md)

**Step 2: remove the closure.** We prove $u(B_E) \supseteq r B_F$. Take $\|y\| < r$. By Step 1, $\overline{u(B_E)} \supseteq 2r B_F$, so $y \in \overline{u(B(0, 1/2))}$: there is $x_1$ with $\|x_1\| < 1/2$ and $\|y - u(x_1)\| < r/2$. Apply the same argument to $y - u(x_1)$ (norm $< r/2 < r$) to get $x_2$ with $\|x_2\| < 1/4$ and $\|y - u(x_1) - u(x_2)\| < r/4$. Continuing gives $(x_n)$ with
$$\|x_n\| < 2^{-n}, \qquad \Bigl\| y - u\Bigl(\sum_{j \le n} x_j\Bigr) \Bigr\| < r\,2^{-n} .$$
Since $\sum \|x_n\| < 1$ and $E$ is **complete**, the series $x := 

> continued in nodes/thm.open-mapping-banach.en.7.md
