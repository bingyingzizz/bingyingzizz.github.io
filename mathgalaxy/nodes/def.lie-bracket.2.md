# Lie 括号　`def.lie-bracket`　·　续页（第 2 页）
[在星图里打开](../#n=def.lie-bracket)　·　第 1 页 [nodes/def.lie-bracket.md](./def.lie-bracket.md)

## 陈述（续）
右边看着用到二阶导数，但二阶偏导可交换，所以 $[X,Y]f$ 只含 $f$ 的一阶导数 —— 于是它仍是向量场。在卡里显式算出

$$[X,Y] = \sum_{i=1}^{n}\Bigl(\sum_{j=1}^{n}\bigl(X^{j}\partial_{j}Y^{i} - Y^{j}\partial_{j}X^{i}\bigr)\Bigr)\frac{\partial}{\partial x^{i}} .$$

四条性质（$f,g \in C^{\infty}(M)$）：
1. **反称**：$[X,Y] = -[Y,X]$，特别 $[X,X] = 0$；
2. $\mathbb{R}$-**双线性**；
3. **Jacobi 恒等式**：$[X,[Y,Z]] + [Y,[Z,X]] + [Z,[X,Y]] = 0$；
4. **Leibniz 律**：$[X, fY] = (Xf)\,Y + f\,[X,Y]$，并且 $[fX, gY] = fg\,[X,Y] + f(Xg)\,Y - g(Yf)\,X$。

> 续见 [nodes/def.lie-bracket.3.md](./def.lie-bracket.3.md)
