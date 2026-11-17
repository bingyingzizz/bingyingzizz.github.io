# 初等因子（矩阵）　`def.elementary-divisor`　·　说明
根 `../`

⚠ 消歧：这里的初等因子是矩阵/模论概念，**不是** Weierstrass 初等因子 $E_p(z)=(1-z)\exp(z+\cdots+z^p/p)$（`def.elementary-factor`，复分析中的整函数）。两者仅中文名相同。
与不变因子的关系：$d_i$ 是初等因子按整除链分组后的乘积；反过来，初等因子唯一决定全部不变因子。
例：若不变因子为 $x-1$ 与 $(x-1)(x-2)$，则初等因子为 $x-1,\ x-1,\ x-2$。$K$ 代数闭时，$xI-A$ 的初等因子恰为 $(x-\lambda)^s$，每个对应一个 $s$ 阶 Jordan 块（`thm.jordan-canonical-form`）。
