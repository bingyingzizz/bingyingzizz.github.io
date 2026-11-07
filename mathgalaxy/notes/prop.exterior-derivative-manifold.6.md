# 外微分　`prop.exterior-derivative-manifold`　·　说明
根 `../`

**「与图卡无关」到底指什么**：第 4 步说明换图卡算出的两个公式在重叠处相等 —— 因为它们都是满足公理的算子，而引理 A 说这样的算子只有一个。真正把 $\mathrm{d}$ 钉死的是 (3)+(4)：(1) 给函数上的值，(3) 让 $\mathrm{d}$ 穿过楔积，(4) 杀掉 $\mathrm{d}x^{I}$ 的导数。

**与 Tu 的路线对照**：Tu 先用 `prop.pullback-forms` 的第 3 条（与拉回交换）证图卡无关；这里改用「公理唯一性」证。两条路线都对，且都不需要单位分解 —— 这也说明光滑单位分解在本条里不是必需品。

⭐ 有了这一条，`def.de-rham-complex` 里那串 $\Omega^{k}(M)\xrightarrow{\ \mathrm{d}\ }\Omega^{k+1}(M)$ 才真的是一串映射 —— 在这条之前，那串东西只是记号。

⚠️ 顺带钉住一个常见误解：$\mathrm{d}$ 不依赖**度量**，也不依赖**联络**。它是光滑结构本身给出的算子；联络（`def.affine-connection`）与它无关，两者能凑出公式纯属巧合之外的对称性。

> 续见 notes/prop.exterior-derivative-manifold.7.md
