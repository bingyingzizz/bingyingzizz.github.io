# 形式的积分　`def.integral-form`　·　说明
根 `../`

**为什么偏偏是 $n$-形式**：换元时 $\mathrm{d}x^{1}\wedge\cdots\wedge\mathrm{d}x^{n}$ 的系数变换是 $\det$，与积分换元公式里的 $\det$ 精确匹配（保向时无绝对值）。$k<n$ 的形式要积分，得先选一个 $k$ 维子流形把它拉回去 —— 那就是「形式在子流形上的积分」。

**定向不可省**：把 $\psi$ 换成反向的，$\det$ 变号、积分变号。无定向时能积的只有**密度** $\lvert\omega\rvert$ —— 面积元 $\mathrm{d}A$ 就是密度（`def.area-element`）。

**与面积元的接口**：曲面上 $\mathrm{d}A = \sqrt{\det g}\,\mathrm{d}u\wedge\mathrm{d}v$，在定向曲面上积分就是面积。这里 $\sqrt{\det g}$ 是「密度」侧的因子、$\mathrm{d}u\wedge\mathrm{d}v$ 是「形式」侧的定向，两者都写对符号才不会错。

**单位分解为什么够用**：$\omega$ 紧支，只有有限多个 $\rho_{\alpha}\omega$ 非零，每个支在保向卡里，于是化到 $\mathbb{R}^{n}$ 的情形。没有紧支时用「绝对可积」代替，本图不展开。

> 续见 notes/def.integral-form.2.md
