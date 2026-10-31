# 体积形式　`def.volume-form`　·　说明
根 `../`

**为什么必须是最高次形式**：换元公式里 $\mathrm{d}x^{1}\wedge\cdots\wedge\mathrm{d}x^{n}$ 的系数变换恰好是 $\det$（保向时无绝对值），与积分换元里出现的 $\det$ 精确匹配 —— 这就是「形式能积分」的全部理由。$k < n$ 的形式要积分得先拉回到 $k$ 维子流形上。

**根号是密度、楔积是定向**：$\sqrt{\det g}$ 对反向换卡不变（它带的是 $\lvert\det\rvert$），$\mathrm{d}x^{1}\wedge\cdots$ 反向变号。所以 $\mathrm{d}V_{g}$ 必须先取定定向才有定义；无定向时能积的只有密度 $\lvert\mathrm{d}V_{g}\rvert$（面积元 $\mathrm{d}A$ 就是这种，`def.area-element`）。

**二维退化成面积元**：$\mathrm{d}V_{g} = \sqrt{EG - F^{2}}\,\mathrm{d}u\wedge\mathrm{d}v$，与 `def.area-element` 的 $\mathrm{d}A$ 逐字相同，只差「要不要把 $\mathrm{d}u\wedge\mathrm{d}v$ 看成带定向的」这一层。

> 续见 notes/def.volume-form.2.md
