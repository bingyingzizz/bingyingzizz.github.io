# 整体维数　`def.global-dimension`　·　说明
根 `../`

**为什么这三个上确界相等**：由维数消失刻画，「$\operatorname{pd}_{R} M \le d$ 对一切 $M$」「$\operatorname{id}_{R} N \le d$ 对一切 $N$」「$\operatorname{Ext}^{n}_{R}(-,-)$ 对一切 $n > d$ 恒为零」是**同一句话** —— 三条都只是在说「这一整族群在 $n > d$ 处消失」✓。

**四个基本例子**：

- $\operatorname{gl.dim} R = 0 \iff R$ 半单（Wedderburn–Artin：每个模都投射）；域上为 $0$；

- $\operatorname{gl.dim} \mathbb{Z} = 1$（主理想整环，见「主理想整环的整体维数」）；

- $\operatorname{gl.dim} k[x_{1}, \ldots, x_{n}] = n$（Hilbert 合冲定理 + Koszul 复形）；

- $\operatorname{gl.dim} R = \infty$ 会发生（例如 $k[x,y]/(xy)$），此时「没有统一的上界」。

⭐ **它衡量的是「计算 $\operatorname{Ext}$ 需要多少层」**：整体维数越小，导出函子的机器越短。$0$ 维就是「什么都不用算」，$1$ 维就是「只需两条正合列互相推」，这也是阿贝尔群那套同调代数如此简单的原因。

> 续见 notes/def.global-dimension.2.md
