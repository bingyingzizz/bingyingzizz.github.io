# Hausdorff 拓扑阿贝尔群的核与余核　`prop.abhaus-strict-exact`　·　说明
根 `../`

余核那条同理：商映射是开满射 ✓，反之开满射正是它自己核的余等化子 ✓ —— 「开」不能省：$\mathbb{Z}^{\mathrm{disc}} \to \mathbb{Z}^{\mathrm{coarse}}$ 满，但不是余核。
**3.** 若列严格正合，则 $\varphi$ 实现 $\ker\psi$、$\psi$ 实现 $\operatorname{coker}\varphi$，由 2 得 $\varphi$ 闭嵌入、$\psi$ 开满射 ✓。

反过来，若作为抽象群正合、且 $\varphi$ 闭嵌入、$\psi$ 开满射，则 $\varphi$ 与「$\psi^{-1}(0)$ 带子空间拓扑」一致、$\psi$ 与「商去 $\overline{\varphi(M)}$」一致，而 $\varphi(M)$ 闭、故就是商去像 ✓。

于是这条列是核-余核列，即严格正合 ✓。

∎

⭐ **「严格」不是装饰**：在拓扑阿贝尔群里，「正合」与「严格正合」是实打实的差别 —— 拓扑阿贝尔群**不是**阿贝尔范畴，缺的正是「每个态射都由它的核与余核刻画」这一条。凝聚态数学把这一层补回来的方式，是把拓扑群嵌进 $\mathrm{CondAb}$。
