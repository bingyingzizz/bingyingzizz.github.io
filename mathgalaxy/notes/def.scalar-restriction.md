# 标量限制　`def.scalar-restriction`　·　说明
根 `../`

**读法**：元素一个没动，只是「哪些标量算数」变小了。取 $R = \mathbb{Z}$、$f$ 为唯一同态时，$f_{\ast}P$ 就是 $P$ 的加法群 —— 所以「每个模都是阿贝尔群」是标量限制的特例。

**忠实但一般不全**：$S$-线性蕴含 $R$-线性，故 $\operatorname{Hom}_{S}(P, Q) \subseteq \operatorname{Hom}_{R}(f_{\ast}P, f_{\ast}Q)$；反向不成立。例：$\mathbb{Z} \to \mathbb{C}$ 时，共轭 $z \mapsto \bar{z}$ 是 $\mathbb{Z}$-线性的却不是 $\mathbb{C}$-线性的。

⭐ **正合**：核与余核在标量限制下逐点计算（底层加法群不变），所以 $f_{\ast}$ 保核、保余核，是正合函子。这与它是右伴随（`prop.scalar-extension-adjunction`）给出的结论一致，但这里比那更直接。

📌 反方向的函子是把 $R$-模做成 $S$-模的**标量扩张** `def.scalar-extension`；那一个才是左伴随。
