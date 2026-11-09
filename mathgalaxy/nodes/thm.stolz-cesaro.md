# Stolz–Cesàro 定理　`thm.stolz-cesaro`
Stolz–Cesàro：数列极限的离散 L'Hôpital 法则
layer 15 · 定理 · 实数与极限 · 数学分析
[在星图里打开](../#n=thm.stolz-cesaro)　·　[节点索引](../index.md)

设 $\{x_n\}$、$\{y_n\}$ 是实数列，$y_n$ 严格单调。

- **$0/0$ 型**：若 $x_n \to 0$、$y_n \to 0$，且
$$\lim_{n \to \infty} \frac{x_{n+1} - x_n}{y_{n+1} - y_n} = L,$$
则 $\dfrac{x_n}{y_n} \to L$。
- **$*/\infty$ 型**：若 $y_n$ 严格递增且 $y_n \to +\infty$，同样条件成立时 $\dfrac{x_n}{y_n} \to L$。
> 陈述续见 [nodes/thm.stolz-cesaro.2.md](./thm.stolz-cesaro.2.md)


## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.stolz-cesaro.3.md](./thm.stolz-cesaro.3.md)

refs: Knopp, Theory and Application of Infinite Series；Pólya–Szegő, Problems and Theorems in Analysis I

> 说明见 `notes/thm.stolz-cesaro.md`

引用：`thm.stolz-cesaro`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
