# Cartan 公式　`thm.cartan-formula`　·　说明
根 `../`

**各方向用到的假设**（逐形式恒等式与算子恒等式等价，实质在局部微分运算）：
- 对每个 $\omega$ 成立 $\iff$ 算子相等：纯属算子相等的定义展开，无额外假设。
- 从沿流定义的 Lie 导数得到 Cartan 公式：需光滑向量场、光滑形式及流拉回与外微分交换；在函数与坐标微分上验证，再用导子律推广，并非 Lie 导数定义本身。
- Cartan 公式 $\implies$ 与 $\mathrm{d}$ 交换：只代入 $\mathrm{d}^2=0$；闭形式 $\implies$ Lie 导数恰当也只需令 $\mathrm{d}\omega=0$。
- 不需要紧性或向量场完备性，零时刻附近的局部流已经足够；闭性不能从第二个推论删去，例如 $X=\partial_x$、$\omega=x^2\,\mathrm{d}y$ 时 $\mathcal{L}_X\omega=2x\,\mathrm{d}y$ 甚至不闭。
