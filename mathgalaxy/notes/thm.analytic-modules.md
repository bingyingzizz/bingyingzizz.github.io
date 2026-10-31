# 解析环上的模　`thm.analytic-modules`　·　说明
根 `../`

⭐ 这是 `thm.solid-abelian` 的相对版本：把 $\mathbb{Z}$ 换成任意解析环。**固态模**就是 $\operatorname{Mod}^{\mathrm{cond}}_{\mathcal{A}}$ 的对象，$D(\mathcal{A}) := D(\operatorname{Mod}^{\mathrm{cond}}_{\mathcal{A}})$ 就是「$\mathcal{A}$ 上固态模的导出范畴」。

⭐ 三个叫法指同一件事：**固态模 = 完备模 = $\mathcal{A}$-完备模**。叫「完备模」是因为它是相对自由完备模 $\mathcal{A}[S]$ 补全出来的，和「拓扑上把 Cauchy 列补全」无关。

⭐ 证明就是 `lem.solid-completion-criterion` 的第二次应用：解析环的定义正好是那条判据的假设。

⚠ 原文留了一个警告：$\otimes^{L}_{\mathcal{A}}$ 未必是 $\otimes_{\mathcal{A}}$ 的左导出（已知例子都成立）。这一点不影响这里的用法。
