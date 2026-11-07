# de Rham 定理　`thm.de-rham`　·　说明
根 `../`

，保留 skeleton。**
**为什么它是定理而不是定义**：两边复形完全不同（光滑形式 vs 拓扑单形），能对上不是形式化的；核心是第 2 步「$\Omega^{\bullet}$ 是常层的消解」= Poincaré 引理的整体化。
**推论**：$H^{k}_{\mathrm{dR}}$ 同伦不变；紧流形上每个 $H^{k}_{\mathrm{dR}}$ 有限维、$k>\dim M$ 时为零。故「闭而不恰当的形式有多少种」是纯拓扑数据（Betti 数）。
**与 131 那三条 de Rham 节点接得上**：$H^{0}$ 数连通分支（`thm.de-rham-h0`）、局部为零（`lem.poincare-lemma`）、加减开集有长正合列（`thm.mayer-vietoris`）—— 这三条正是第 2、5 步的局部版本。

> 续见 notes/thm.de-rham.6.md
