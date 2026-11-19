# imp.continuous-functions-normed
`imp.continuous-functions-normed` · 推出 · strong 边 · 根 `../`

`def.banach-ab-group` Banach 阿贝尔群 + `def.semi-normed-ab-group` 半范数阿贝尔群 → `prop.continuous-functions-normed` 连续函数空间的范数

**证明。**
**1.** $\sup$ 有限：连续函数在紧空间上有界（$f(S)$ 紧，而范数球的半径有限）✓；三条半范数公理由 $M$ 的半范数逐点验证、再取上确界 ✓；$\|f\| = 0 \implies f = 0$ 当且仅当 $M$ 是 Hausdorff 的（即范数而非半范数）✓。
**完备性**：设 $(f_{j})$ 是 $\|\cdot\|$ 下的 Cauchy 列，则每个 $x$ 处 $(f_{j}(x))$ 是 Cauchy 列，由 $M$ 完备有极限 $f(x)$ ✓；

> 续见 proofs/imp.continuous-functions-normed.2.md
