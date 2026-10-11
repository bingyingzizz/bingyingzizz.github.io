# Stonean 上 Breen–Deligne 的谱序列　`prop.breen-deligne-ss-stonean`　·　说明
根 `../`

**构造**。把 Breen–Deligne 分解 $F(M)^{\bullet}$ 沿 $S$ **基变换**（张量 $\mathbb{Z}[S]$）。因为 $\mathbb{Z}[S]$ 平坦，$F(M)^{\bullet} \cdot S \to M \cdot S$ 仍是拟同构；再套 Stonean 上的截面公式，把 $\operatorname{Ext}(M \cdot S, N)$ 换成 $\operatorname{Ext}(M, N)(S)$。取「对分解的次数过滤」的标准谱序列，$E_{1}$ 项就是逐项自由对象的 Ext。

**$E_{1}$ 项的形状怎么读**：$M^{s_{p,i}}$ 是「$s_{p,i}$ 个 $M$ 的积」，$M^{s_{p,i}} \times S$ 是它配上测试空间 $S$；$H^{q}(-, N)$ 是那个空间上的凝聚态上同调。也就是：**把 Ext 换算成一批空间的上同调**，而空间的上同调是能靠 §8.1–8.2 的零调性定理打掉的。

⭐ **这就是计算路径**：「要算 Ext，先展成谱序列，再把每一格的上同调按空间的类型（Stone / 紧 Hausdorff / 局部紧）用零调性定理归零」。§8.3 后面的每条计算定理都是这条谱序列的特例。
