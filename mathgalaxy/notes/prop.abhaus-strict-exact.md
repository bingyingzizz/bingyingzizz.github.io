# Hausdorff 拓扑阿贝尔群的核与余核　`prop.abhaus-strict-exact`　·　说明
根 `../`

**证明。**
**1.** 核是 $f$ 与 $0$ 的等化子；在拓扑阿贝尔群里等化子就是 $\{x : f(x) = 0\}$ 配**子空间拓扑**（$f$ 连续而 $N$ 是 Hausdorff，所以这个集合闭）✓。余核是余等化子：$\mathbf{AbHaus}$ 里的商必须仍然 Hausdorff，而 $N/f(M)$ 只有在 $f(M)$ **闭**时才 Hausdorff，故余等化子只能是 $N/\operatorname{cl}(f(M))$（带商拓扑）✓ —— 一般连续同态的像**不必闭**（$\mathbb{Z}^{\mathrm{disc}} \to \mathbb{Z}^{\mathrm{coarse}}$ 的像稠密而不闭），所以闭包不能省；像已经闭时就退化成 $N/f(M)$ ✓。
**2.** 「核」是带子空间拓扑的那个等化子，所以它作为映射必然是到闭子群上的同胚嵌入 ✓；反过来，闭嵌入 $\varphi : M' \to M$ 恰好是 $\varphi$ 与 $0$ 的等化子（等化子带的就是子空间拓扑，像闭保证商/余核那边也对）✓。余核那条同理：商映射是开满射 ✓，反之开满射正是它自己核的余等化子 ✓ —— 「开」不能省：$\mathbb{Z}^{\mathrm{disc}} \to \mathbb{Z}^{

> 续见 notes/prop.abhaus-strict-exact.2.md
