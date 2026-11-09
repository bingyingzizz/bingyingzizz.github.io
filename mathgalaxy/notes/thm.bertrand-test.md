# 贝特朗判别法（Bertrand）　`thm.bertrand-test`　·　说明
根 `../`

**与 Kummer 判别法的关系**：取 $c_n=n\log n$（$n\ge2$），则

$$K_n=c_n\frac{a_n}{a_{n+1}}-c_{n+1}=n\log n\Bigl(1+\frac1n+\frac{\beta}{n\log n}+o(\cdot)\Bigr)-(n+1)\log(n+1).$$

用 $(n+1)\log(n+1)=n\log n+\log n+1+O(1/n)$ 展开，得 $K_n=\beta-1+o(1)$。又 $\sum 1/c_n=\sum 1/(n\log n)$ 发散（`thm.integral-test`，$\int dx/(x\log x)=\log\log x$），故 $\beta>1$ 收敛、$\beta<1$ 发散。

**$\beta=1$ 的两个例子**：$\sum 1/(n\log n)$ 发散（$\beta=1$）；$\sum 1/(n\log n(\log\log n)^2)$ 收敛（同样 $\beta=1$，但积分 $\int dx/(x\log x(\log\log x)^2)$ 收敛）。

⚠ 这里的「发散/收敛」来自 Kummer 判别法的两个方向，不是单靠 Raabe：Raabe 在 $\beta$ 任意时都只看到 $R=1$。
