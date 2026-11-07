# Frobenius 定理　`thm.frobenius`　·　说明
根 `../`

**证明结构**：四条等价里 (2) 是引擎。两条完整证明边是 `imp.mf2-frobenius-flat`（(1)$\implies$(2) 的流盒加降秩归纳）与 `imp.mf2-frobenius-integral`（(2)$\implies$(3)、(3)$\implies$(1)、(2)$\implies$(4)）。下面把主线逐步写清，可以独立阅读。

**一、(1)$\implies$(2)：流盒 + 降秩归纳。** 取 $p$，在 $p$ 的邻域取光滑生成元 $X_{1},\ldots,X_{k}$，它们处处独立。

1. 由 `thm.flow-local`，把 $X_{1}$ 沿其局部流拉直：存在坐标 $(y^{1},\ldots,y^{n})$ 使 $X_{1}=\partial_{1}$（流盒定理）。
2. 把其余生成元写成 $X_{i}=a_{i}\,\partial_{1}+Y_{i}$（$i\ge2$），其中 $Y_{i}$ 只含 $\partial_{2},\ldots,\partial_{n}$ 分量。因为 $\mathrm{d}y^{1}$ 是闭形式，

$$\mathrm{d}y^{1}\bigl([\partial_{1},Y_{i}]\bigr)=\partial_{1}\bigl(\mathrm{d}y^{1}(Y_{i})\bigr)-Y_{i}\bigl(\mathrm{d}y^{1}(\partial_{1})\bigr)=0,$$

> 续见 notes/thm.frobenius.2.md
