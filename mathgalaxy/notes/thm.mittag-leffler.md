# Mittag-Leffler 定理　`thm.mittag-leffler`　·　说明
根 `../`

⭐ 一句话：这是「按主部插值」的存在定理。Weierstrass 乘积定理是它的**零点**版，Mittag-Leffler 是**极点**版 —— 一个指定零点的位置与重数，一个指定极点的位置与主部。

⚠ 本条只**陈述**结论。完整证明要用 Runge 逼近或 Weierstrass 收敛因子逐项修正，属于逼近论，这里不展开；边上只记证明的骨架。

⭐ 收敛的障碍在哪：极点无穷多个时 $\sum_k P_k$ 一般处处发散。修正的办法是逐项减去一个在 $a_k$ 附近全纯的函数（通常是 $P_k$ 在 $a_k$ 处的 Taylor 多项式），把它在越来越大的紧集上压得足够小。

⭐ 例子（经典的两个）：

$$\pi^2 \csc^2(\pi z) = \sum_{n \in \mathbb{Z}} \frac{1}{(z - n)^2}, \qquad \pi \cot(\pi z) = \frac{1}{z} + \sum_{n \ne 0} \left( \frac{1}{z - n} + \frac{1}{n} \right).$$

第二个里的 $+1/n$ 就是收敛因子。

📌 与留数的接口：主部里的一次项系数 $c_{k 1}$ 正是 $\operatorname{Res}(f, a_k)$，所以 Mittag-Leffler 也可以读成「任意指定留数与高阶主部」。
