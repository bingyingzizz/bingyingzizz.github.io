# 微分形式　`def.differential-form`　·　说明
根 `../`

**与外代数的关系**：每点 $\omega_{p}\in\bigwedge^{k}(\mathbb{R}^{n})^{\ast}$，所以 $k$-形式就是「$\bigwedge^{k}(\mathbb{R}^{n})^{\ast}$-值的光滑函数」。外代数给代数结构，光滑性给分析结构；两者合起来才能定义 $\mathrm{d}$（`def.exterior-derivative`）。

**与一般多重线性型的区别**：一般 $k$ 重线性型有 $n^{k}$ 个分量，加上交错性之后只剩 $\binom{n}{k}$ 个 —— 这正是它能被积分的原因（`def.integral-form`）。

**低次形式的通俗身份**（$n = 3$）：$0$-形式是函数；$1$-形式 $P\,\mathrm{d}x+Q\,\mathrm{d}y+R\,\mathrm{d}z$ 是做功与环量；$2$-形式是通量；$3$-形式是密度。梯度、旋度、散度是同一个 $\mathrm{d}$ 在不同次数上的样子。

⚠️ **方向**：形式沿映射**反**着走（拉回，`prop.pullback-forms`），向量场沿映射**正**着走（前推，且要求映射可逆）。这是形式比向量场好用的根本原因。

> 续见 notes/def.differential-form.2.md
