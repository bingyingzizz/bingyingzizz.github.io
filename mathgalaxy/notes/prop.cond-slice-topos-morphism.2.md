# Cond/X 到开集拓扑斯的态射　`prop.cond-slice-topos-morphism`　·　说明
根 `../`

**证明。** 先看两个函子都有定义：逆像把 $Y \in \mathrm{Cond}/X$ 送到预层 $U \mapsto \operatorname{Hom}_{/X}(\underline{U}, Y)$，而 $\mathrm{Open}(X)$ 上的层条件只涉及开集的含入，逐条验即可；顺像 $\varinjlim_{U \subseteq X,\ s \in F(U)} \underline{U}$ 取的是**滤过**余极限（开集沿含入滤过），在 $\mathrm{Cond}$ 里存在。
**逆像左正合**：$\varinjlim$ 在 $\mathrm{Cond}$ 里正合（AB5）。
**伴随**：逐项算
$$\operatorname{Hom}_{/X}\Bigl(\varinjlim_{U, s} \underline{U},\ Y\Bigr) = \varinjlim_{U, s} \operatorname{Hom}_{/X}(\underline{U}, Y) = \operatorname{Hom}(F, Y),$$
第一式是余极限的泛性质，第二式就是把「从 $F$ 到 $Y$ 的映射」按 $F$ 的定义写成相容族 $\{F(U) \to \operatorname{Hom}_{/X}(\underline{U}, Y)\}$ —— 两者是同一件事。于是有伴随 $\varinjlim \underline{U} \dashv \bigl(U \mapsto \operatorname{Hom}_{/X}(\underline{U}, -)\bigr)$，逆像左正合，故 $c_{X}$ 是拓扑斯态射。∎
