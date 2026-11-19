# imp.filtered-exact
`imp.filtered-exact` · 推出 · strong 边 · 根 `../`

`def.category-of-sets` 集合范畴 + `def.limit` 极限 + `def.commutative-diagram` 图与交换图 → `prop.filtered-exact` 滤过余极限正合

**证明。** 滤过范畴就是「任意有限图都有余锥」的小范畴。
- **先看有限积**：给滤过图 $X_{i}, Y_{i}$，比较映射
$$\varinjlim_{i}(X_{i}\times Y_{i}) \longrightarrow \bigl(\varinjlim_{i}X_{i}\bigr)\times\bigl(\varinjlim_{i}Y_{i}\bigr)$$
**满**：取右边一对 $([x],[y])$，$x \in X_{i}$、$y \in Y_{j}$；由滤过性存在 $k$ 与 $i\to k$、$j\to k$，于是 $(x_{k}, y_{k})$ 的代表落到 $X_{k}\times Y_{k}$ ✓。
**单**：若 $(x_{i},y_{i})$ 与 $(x'_{i'},y'_{i'})$ 在右边相等，则各坐标在某个更后的指标处相等；由滤过性取公共的 $k$，在 $X_{k}\times Y_{k}$ 里它们已经相等 ✓。
- **一般有限极限**由有限积与等化子生成：等化子 $\{(x,y) : f(x) = g(y)\}$ 的两边取代表元后，滤过性同样给出公共指标使等式在那个指标处成立（$\mathbf{Set}$ 里

> 续见 proofs/imp.filtered-exact.2.md
