# 正合偶　`def.exact-couple`　·　说明
根 `../`

**三条良定义性的检验**（这是「导出偶仍是正合偶」的全部难点）：
- $j^{\prime}$：若 $i(x) = i(x^{\prime})$，则 $x - x^{\prime} \in \ker i = \operatorname{im} k$，于是 $j(x - x^{\prime}) \in j(\operatorname{im} k) = 0$（因为 $kj = 0$）—— 与代表元无关。又 $j(x)$ 是 $d$-闭上链：$d\, j(x) = j k j(x) = 0$。
- $k^{\prime}$：若 $e \in \ker d$（即 $j k e = 0$），则 $k e \in \ker j = \operatorname{im} i = D^{\prime}$，故 $k^{\prime}$ 落在 $D^{\prime}$ 里；若 $e \in \operatorname{im} d$（即 $e = j k(e_{0})$），则 $k e = k j k(e_{0}) = 0$ —— 与代表元无关。
- $i^{\prime}$：$i(D^{\prime}) = i^{2}(D) \subseteq i(D) = D^{\prime}$。

再验一遍三处正合即得导出偶又是正合偶。于是可以**无穷递推**：$E_{1} := E$、$E_{r+1} := H(E_{r}, d_{r})$。这正是谱序列的「一页一页算」。

> 续见 notes/def.exact-couple.2.md
