# imp.abhaus-strict-exact
`imp.abhaus-strict-exact` · 推出 · strong 边 · 根 `../`

`def.topo-ab-group` 拓扑阿贝尔群 + `def.kernel-cokernel` 核与余核 + `def.exact-sequence` 一般正合列 → `prop.abhaus-strict-exact` Hausdorff 拓扑阿贝尔群的核与余核

像已经闭时就退化成 $N/f(M)$ ✓。
**2.** 「核」是带子空间拓扑的那个等化子，所以它作为映射必然是到闭子群上的同胚嵌入 ✓；反过来，闭嵌入 $\varphi : M' \to M$ 恰好是 $\varphi$ 与 $0$ 的等化子（等化子带的就是子空间拓扑，像闭保证商/余核那边也对）✓。

余核那条同理：商映射是开满射 ✓，反之开满射正是它自己核的余等化子 ✓ —— 「开」不能省：$\mathbb{Z}^{\mathrm{disc}} \to \mathbb{Z}^{\mathrm{coarse}}$ 满，但不是余核。
**3.** 若列严格正合，则 $\varphi$ 实现 $\ker\psi$、$\psi$ 实现 $\operatorname{coker}\varphi$，由 2 得 $\varphi$ 闭嵌入、$\psi$ 开满射 ✓。

> 续见 proofs/imp.abhaus-strict-exact.3.md
