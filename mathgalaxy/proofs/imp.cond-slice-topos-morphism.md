# imp.cond-slice-topos-morphism
`imp.cond-slice-topos-morphism` · 推出 · strong 边 · 根 `../`

`def.topos` 拓扑斯 + `def.sheaf` 层 + `def.fibered-product` 纤维积 / 纤维余积 + `def.condensed-set` 凝聚态集 → `prop.cond-slice-topos-morphism` Cond/X 到开集拓扑斯的态射

**构造基础**：有了这两个方向，$\mathrm{Cond}/X$ 上的上同调才能被 $\mathrm{Open}(X)$ 上的层上同调逼近。

**证明。** 先看两个函子都有定义：逆像把 $Y \in \mathrm{Cond}/X$ 送到预层 $U \mapsto \operatorname{Hom}_{/X}(\underline{U}, Y)$，而 $\mathrm{Open}(X)$ 上的层条件只涉及开集的含入，逐条验即可；

> 续见 proofs/imp.cond-slice-topos-morphism.2.md
