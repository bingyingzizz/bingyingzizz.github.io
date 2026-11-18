# Weierstrass product theorem　`thm.weierstrass-product`
English entry · root `../`
[in graph](../#n=thm.weierstrass-product)　·　[Chinese page (authoritative)](./thm.weierstrass-product.md)

**Step 1. Choose $p_{n}$ so that the product converges.** Take $p_{n} = n$. Given any $R>0$, since $a_{n}\to\infty$, there exists $N$ such that whenever $n\ge N$, we have $|a_{n}|\ge 2R$; then for $|z|\le R$ and $n\ge N$, we have $|z/a_{n}|\le 1/2$. By Lemma 1, $\bigl|1 - E_{n}(z/a_{n})\bigr| \le 4\Bigl(\frac{R}{|a_{n}|}\Bigr)^{n+1} \le 4\cdot 2^{-(n+1)},$, so $\sum_{n}\bigl|1 - E_{n}(z/a_{n})\bigr|$ converges uniformly on $|z|\le R$. By Lemma 2, $F(z) := \prod_{n=1}^{\infty} E_{n}(z/a_{n})$ is entire, its zeros are exactly the points $a_{n}$, and their multiplicities equal the multipl

> continued in nodes/thm.weierstrass-product.en.8.md
