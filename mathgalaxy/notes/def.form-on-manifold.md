# 微分形式　`def.form-on-manifold`　·　说明
根 `../`

**与 $\mathbb{R}^{n}$ 版的关系**：`def.differential-form` 是这一条的**坐标模型**，不是另一套东西 —— 在同一张图卡上把它展开，得到的就是那条陈述里的式子。两条并排放，是为了让「坐标算式」与「内蕴定义」各有一个可点的住处。

**另一种等价说法**：把每点的 $\Lambda^{k}T_{p}^{\ast}M$ 摞成外积丛 $\Lambda^{k}T^{\ast}M$（余切丛 `def.cotangent-bundle` 的外积），则 $\Omega^{k}(M) = \Gamma(\Lambda^{k}T^{\ast}M)$ 是它的光滑截面（`def.bundle-section`）。

截面语言自动带来局部平凡化与过渡函数，坐标公式就是它的局部样子 —— 这条等价是 Tu 在「丛」那一章回头补的，两条路殊途同归。

⚠️ $\Omega^{k}(M)$ 是 $C^{\infty}(M)$-**模**：可以逐点乘光滑函数、逐点相加。

楔积、内乘、拉回都是模同态；只有 $\mathrm{d}$ 例外 —— 它只是 $\mathbb{R}$-线性的（$\mathrm{d}(f\omega) = \mathrm{d}f\wedge\omega + f\,\mathrm{d}\omega$）。

> 续见 notes/def.form-on-manifold.2.md
