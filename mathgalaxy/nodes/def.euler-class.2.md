# Euler 类　`def.euler-class`　·　续页（第 2 页）
[在星图里打开](../#n=def.euler-class)　·　第 1 页 [nodes/def.euler-class.md](./def.euler-class.md)

## 陈述（续）
$$e(E) := \Bigl[\, \operatorname{Pf}\Bigl(\frac{F}{2\pi}\Bigr) \,\Bigr] \in H^{2m}(B; \mathbb{Z}) ,$$

其中 $\operatorname{Pf}$ 是 **Pfaffian**（对反对称矩阵 $A$ 定义 $\operatorname{Pf}(A)^{2} = \det A$，且 $\operatorname{Pf}$ 在 $\mathrm{SO}(k)$ 共轭下不变）。

**基本性质**：
1. **自然性**：$e(f^{*}E) = f^{*}e(E)$；
2. **与顶陈类的关系**：$e(E) = c_{m}(E \otimes \mathbb{C})$（$k = 2m$ 时；⚠️ 见注的符号约定）；
3. **Gauss–Bonnet（曲面情形）**：$\Sigma$ 为闭可定向曲面时

$$\int_{\Sigma} e(T\Sigma) = \chi(\Sigma) ,$$

右端是 Euler 示性数 —— 这就是 `thm.gauss-bonnet` 的上同调说法。

> 续见 [nodes/def.euler-class.3.md](./def.euler-class.3.md)
