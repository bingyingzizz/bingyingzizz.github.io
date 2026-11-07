# 完备性定理　`thm.completeness-first-order`　·　说明
根 `../`

**第一步：化到语句。** 对 $\Gamma\cup\{\varphi\}$ 中出现的每个自由变元 $x$ 添一个新常元 $c_x$，把公式里的 $x$ 全换成 $c_x$，得 $\Gamma_c,\varphi_c$。则 (i) $\Gamma\vdash\varphi\iff\Gamma_c\vdash\varphi_c$：把证明里的 $c_x$ 换回自由变元 $x$（公理模式对代入封闭，分离与推广保持形状），反向把 $x$ 换成 $c_x$；(ii) $\Gamma\vDash\varphi\iff\Gamma_c\vDash\varphi_c$：$\mathcal{L}_c$ 的结构就是「$\mathcal{L}$ 的结构 + 一个赋值」，反之每个赋值唯一延拓。所以只需对**语句**证明。

**第二步：可靠性（$\vdash\implies\vDash$）。** 逐条验证：命题公理是重言式；(Q1) 若 $\forall x\,\psi$ 在 $\mathfrak{A}$ 中真，则 $\psi[t/x]$ 对每个 $t$ 的解释真；(Q2) 在 $x\notin\operatorname{FV}(\psi)$ 时，若 $\forall x(\psi\to\chi)$ 与 $\psi$ 真，则对每个 $a$ 有 $\chi$ 真；(E1)(E2) 是等词的标准语义。分离规则保持「真」，推广保持「对所有赋值真」。对证明长度归纳得 $\Gamma\vdash\varphi\implies\Gamma\vDash\varphi$。

> 续见 notes/thm.completeness-first-order.3.md
