# 满态射在自由空间上逐点检验
`imp.cond-epi` · 推出 · strong 边 · 根 `../`

`def.sheaf` 层 + `prop.cond-projectives` Cond 有足够多投射对象 + `def.free-presentation` 自由表示 → `prop.cond-epi` 凝聚态集满态射的判据

**（$\Longleftarrow$）** 显然：若每个 $X(F) \to Y(F)$ 都满，则层之间的这个态射在每个自由对象上满，由「生成元集判定满态射」的一般道理即得它在 $\mathrm{Cond}$ 里是满态射。∎

**（$\Longrightarrow$）** 设 $p : X \to Y$ 是满态射，先证它「局部满」。取**像**

$$\operatorname{Im}(p)(S) := \{\, y \in Y(S) \ :\ \exists \text{ 覆盖 } (S_{i} \to S),\ \exists x \in X(S_{i}),\ p(x) = y|_{S_{i}} \,\}$$

> 续见 proofs/imp.cond-epi.2.md
