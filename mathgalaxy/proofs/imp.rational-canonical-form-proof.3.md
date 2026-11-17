# imp.rational-canonical-form-proof
`imp.rational-canonical-form-proof` · 推出 · strong 边 · 根 `../`

`def.companion-matrix` 友矩阵 + `def.cyclic-subspace` 循环子空间 + `thm.pid-fg-module-structure` PID 上有限生成模的结构 + `thm.cayley-hamilton` Cayley–Hamilton 定理 + `thm.smith-normal-form` Smith 标准形 + `def.invariant-factor` 不变因子 → `thm.rational-canonical-form` 有理标准形

唯一性：$d_i$ 恰是 $xI-A$ 的非单位不变因子（Smith 标准形，`thm.smith-normal-form`；`def.invariant-factor`），而 Smith 标准形的对角元在相差单位下由 $xI-A$ 唯一确定；取首一代表即唯一。反过来，若 $B=\operatorname{diag}(C_{d_1},\ldots,C_{d_s})$ 且整除链相同，则对应的 $K[x]$-模同构，故 $B\sim A$。$\blacksquare$
