# Kan 延拓　`def.kan-extension`　·　说明
根 `../`

回答的问题是：**能不能把 $F$ 延拓到 $\mathcal{C}'$ 上？** 左 Kan 延拓是 $F$ 的**最优左近似扩张** —— 它不要求 $F$ 真能延拓，只要求「在 $\mathcal{C}$ 上与 $F$ 一致」的函子里，它最贴合。

与伴随逐条对照：



| 伴随 $L \dashv R$ | $p_{!} \dashv p^{*}$ |

| --- | --- |

| 单位 $\eta_{A} : A \to R L A$ | $\alpha : F \implies p^{*}(p_{!}F)$ |

| $f : A \to R B$ | $\gamma : F \implies p^{*}(G)$ |

| $g : L A \to B$ | $\widetilde{\gamma} : p_{!}F \implies G$ |

| $f = R(g) \circ \eta_{A}$ | $\gamma = p^{*}(\widetilde{\gamma}) \circ \alpha$ |



所以 Kan 延拓不是新东西，它只是把伴随的公式换了个方向用。
