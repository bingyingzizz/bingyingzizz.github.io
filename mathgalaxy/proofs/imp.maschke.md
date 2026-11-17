# imp.maschke
`imp.maschke` · 推出 · strong 边 · 根 `../`

`def.group-representation` 有限群表示 + `def.semisimple-representation` 半单表示 + `def.quotient-representation` 商表示 → `thm.maschke` Maschke 定理

设 $W\subseteq V$ 是子表示。取线性投影 $p:V\to W$（存在，因 $W$ 是子空间），定义 $\bar p(v)=\frac1{|G|}\sum_{g\in G}g\,p(g^{-1}v)$。条件 $\operatorname{char}F\nmid|G|$ 使 $\frac1{|G|}\in F$。对 $h\in G$，$\bar p(hv)=\frac1{|G|}\sum_g g p(g^{-1}hv)=\frac1{|G|}\sum_{g'}hg'p(g'^{-1}v)=h\bar p(v)$，故 $\bar p$ 是 $G$-等变。又 $w\in W$ 时 $g^{-1}w\in W$，$p(g^{-1}w)=g^{-1}w$，故 $\bar p(w)=w$。于是 $\bar p$ 是到 $W$ 的等变投影，$V=W\oplus\ker\bar p$。对每个子表示如此分裂即得完全可约。$\blacksquare$
