# imp.abhaus-strict-exact
`imp.abhaus-strict-exact` · 推出 · strong 边 · 根 `../`

`def.topo-ab-group` 拓扑阿贝尔群 + `def.kernel-cokernel` 核与余核 + `def.exact-sequence` 一般正合列 → `prop.abhaus-strict-exact` Hausdorff 拓扑阿贝尔群的核与余核

**证明。**
**1.** 核是 $f$ 与 $0$ 的等化子；在拓扑阿贝尔群里等化子就是 $\{x : f(x) = 0\}$ 配**子空间拓扑**（$f$ 连续而 $N$ 是 Hausdorff，所以这个集合闭）✓。

余核是余等化子：$\mathbf{AbHaus}$ 里的商必须仍然 Hausdorff，而 $N/f(M)$ 只有在 $f(M)$ **闭**时才 Hausdorff，故余等化子只能是 $N/\overline{f(M)}$（带商拓扑）✓ —— 一般连续同态的像**不必闭**（$\mathbb{Z}^{\mathrm{disc}} \to \mathbb{Z}^{\mathrm{coarse}}$ 的像稠密而不闭），所以闭包不能省；

> 续见 proofs/imp.abhaus-strict-exact.2.md
