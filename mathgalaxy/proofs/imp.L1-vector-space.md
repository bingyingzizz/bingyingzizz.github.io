# imp.L1-vector-space
`imp.L1-vector-space` · 推出 · strong 边 · 根 `../`

`def.integrable` 可积 / L¹ + `thm.mct` 单调收敛定理 → `prop.L1-vector-space` L¹ 是向量空间

**证明。**
- **非负函数的可加性**：$f, g \in L^{+}$ 时，$\int(f+g) = \int f + \int g$ —— 对简单函数逐条验证（线性性），再用简单函数逼近 + 单调收敛定理取极限 ✓；**齐次性** $\int cf = c\int f$（$c \ge 0$）同理 ✓。
- **一般实值**：$f = f^{+} - f^{-}$、$g = g^{+} - g^{-}$，展开 $(af+bg)^{\pm}$ 并把上面的线性性逐项用上，得 $\int(af+bg) = a\int f + b\int g$ ✓（复值再对实部虚部各做一次）。
- **是向量空间**：$f, g \in L^{1}$、$a, b \in \mathbb{R}$ 时
$$\int|af+bg| \le |a|\int|f| + |b|\int|g| < \infty,$$
故 $af+bg \in L^{1}$ ✓；元素的加法与数乘按 **a.e.** 意义定义（两个 a.e. 相等的可积函数视为同一元素），$\int$ 在这个商下良定义 ✓。∎
