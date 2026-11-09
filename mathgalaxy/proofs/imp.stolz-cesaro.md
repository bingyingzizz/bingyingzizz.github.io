# Stolz–Cesàro 定理的证明（$0/0$ 与 $\infty/\infty$）
`imp.stolz-cesaro` · 推出 · strong 边 · 根 `../`

`def.sequence-limit` 数列极限 → `thm.stolz-cesaro` Stolz–Cesàro 定理

**$0/0$ 型**：设 $y_n>0$、$y_n\downarrow0$、$x_n\to0$，且 $\Delta x_n/\Delta y_n\to L$（$\Delta u_n=u_{n+1}-u_n$，$\Delta y_n<0$）。对 $N>n$ 有
$$\frac{x_n}{y_n}=\frac{\sum_{k=n}^{N-1}\Delta x_k+x_N}{\sum_{k=n}^{N-1}\Delta y_k+y_N}.$$
令 $N\to\infty$，$x_N,y_N\to0$，得 $x_n/y_n=\sum_{k\ge n}\Delta x_k\big/\sum_{k\ge n}\Delta y_k$，右端是以 $-\Delta y_k$ 为权的加权平均。当 $n\to\infty$ 时权重总质量 $\sum_{k\ge n}-\Delta y_k=y_n\to0$，且每一项 $\Delta x_k/\Delta y_k\to L$，故加权平均 $\to L$，即 $x_n/y_n\to L$。
**$\infty/\infty$ 型**：设 $y_n\uparrow+\infty$，$\Delta x_n/\Delta y_n\to L$（$\Delta y_n>0$）。取 $\varepsilon>0$，存在 $N$，当 $k\ge 

> 续见 proofs/imp.stolz-cesaro.2.md
