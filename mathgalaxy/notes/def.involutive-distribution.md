# 对合分布　`def.involutive-distribution`　·　说明
根 `../`

**为什么只需查生成元**：$\Gamma(\mathcal{D}|_{U})$ 是 $C^{\infty}(U)$-模，任意两个截面写成 $f^{i}X_{i}$、$g^{j}X_{j}$。由 `def.lie-bracket` 的第 4 条（Leibniz 律）

$$[fX_{i},\,gX_{j}] = fg\,[X_{i},X_{j}] + f(X_{i}g)\,X_{j} - g(X_{j}f)\,X_{i},$$

后两项只是生成元的组合，所以「括号落在 $\mathcal{D}$ 里」逐点由 $[X_{i},X_{j}]$ 决定。

**秩 $1$ 永远对合**：局部取处处非零的 $X$ 生成 $\mathcal{D}$，任意两个截面是 $fX$、$gX$，而 $[fX,gX] = f(Xg)X - g(Xf)X$ 仍是 $X$ 的倍数。所以**线分布永远可积**（`thm.frobenius`）；可积性是从秩 $2$ 才开始的问题 —— 这与「一个一阶常微分方程总有解、一阶偏微分方程组才有障碍」是同一句话。

> 续见 notes/def.involutive-distribution.2.md
